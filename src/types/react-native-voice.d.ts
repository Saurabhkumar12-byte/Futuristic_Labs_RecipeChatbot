declare module 'react-native-voice' {
  export interface SpeechResultsEvent {
    value: string[];
  }

  export interface SpeechErrorEvent {
    error: string;
  }

  const Voice: {
    onSpeechStart?: () => void;
    onSpeechRecognized?: () => void;
    onSpeechEnd?: () => void;
    onSpeechError?: (event: SpeechErrorEvent) => void;
    onSpeechResults?: (event: SpeechResultsEvent) => void;
    onSpeechPartialResults?: (event: SpeechResultsEvent) => void;
    onSpeechVolumeChanged?: (event: { volume: number }) => void;
    start?: (locale?: string) => Promise<void>;
    stop?: () => Promise<void>;
    cancel?: () => Promise<void>;
    destroy?: () => Promise<void>;
    removeAllListeners?: () => void;
  };

  export default Voice;
}
