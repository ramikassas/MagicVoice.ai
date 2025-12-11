import { GoogleGenAI, LiveServerMessage, Modality, Type, Schema, FunctionDeclaration } from "@google/genai";

// Initialize Gemini Client
const getClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

// 1. TTS Generation (Flash 2.5 TTS)
export const generateSpeech = async (text: string) => {
  const ai = getClient();
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: 'Kore' }, // Voices: Puck, Charon, Kore, Fenrir, Zephyr
        },
      },
    },
  });
  return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
};

// 2. Video Generation (Veo 3.1)
export const generateVideo = async (prompt: string) => {
  // Ensure fresh client with user selected key if applicable
  const ai = getClient();
  let operation = await ai.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt: prompt,
    config: {
      numberOfVideos: 1,
      resolution: '720p',
      aspectRatio: '16:9'
    }
  });

  while (!operation.done) {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
    operation = await ai.operations.getVideosOperation({operation: operation});
  }

  const uri = operation.response?.generatedVideos?.[0]?.video?.uri;
  if (!uri) throw new Error("No video URI returned");
  return `${uri}&key=${process.env.API_KEY}`;
};

// 3. Audio Transcription (Flash 2.5)
export const transcribeAudio = async (base64Audio: string, mimeType: string) => {
  const ai = getClient();
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: {
      parts: [
        { inlineData: { data: base64Audio, mimeType } },
        { text: "Transcribe the audio accurately." }
      ]
    }
  });
  return response.text;
};

// 4. Video Understanding (Pro 3)
export const analyzeVideo = async (base64Video: string, mimeType: string, prompt: string) => {
  const ai = getClient();
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: {
      parts: [
        { inlineData: { data: base64Video, mimeType } },
        { text: prompt || "Describe what is happening in this video in detail." }
      ]
    }
  });
  return response.text;
};

// 5. Market Analysis (Search Grounding + Flash 2.5)
export const searchMarketTrends = async (query: string) => {
  const ai = getClient();
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: query,
    config: {
      tools: [{ googleSearch: {} }],
    },
  });
  return {
    text: response.text,
    groundingChunks: response.candidates?.[0]?.groundingMetadata?.groundingChunks
  };
};

// 6. Business Strategy (Thinking Mode + Pro 3)
export const generateBusinessStrategy = async (domainName: string) => {
  const ai = getClient();
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: `Create a comprehensive business strategy for the premium domain name "${domainName}". Include target audience, potential monetization models (SaaS, API wrapper, etc.), and marketing angles.`,
    config: {
      thinkingConfig: { thinkingBudget: 32768 },
    }
  });
  return response.text;
};

// 7. Live API Connection Helper
export const connectLiveSession = async (
  callbacks: {
    onOpen: () => void;
    onMessage: (message: LiveServerMessage) => void;
    onError: (e: ErrorEvent) => void;
    onClose: (e: CloseEvent) => void;
  }
) => {
  const ai = getClient();
  return ai.live.connect({
    model: 'gemini-2.5-flash-native-audio-preview-09-2025',
    callbacks: {
      onopen: callbacks.onOpen,
      onmessage: callbacks.onMessage,
      onerror: callbacks.onError,
      onclose: callbacks.onClose,
    },
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
      },
      systemInstruction: "You are MagicVoice, a helpful and innovative AI voice assistant. You are demoing the capabilities of the MagicVoice.ai domain. Be brief, enthusiastic, and showcase your vocal clarity.",
    },
  });
};
