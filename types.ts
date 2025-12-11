export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

// Add types for window.aistudio
declare global {
  // Define AIStudio interface to merge with the existing global definition.
  // The error "Property 'aistudio' must be of type 'AIStudio'" indicates 
  // that window.aistudio is already declared with this type.
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    // We rely on the global declaration of 'aistudio' which is of type 'AIStudio'.
    // We do not redeclare 'aistudio' here to avoid "Subsequent property declarations must have the same type" errors.
    
    webkitAudioContext: typeof AudioContext;
  }
}
