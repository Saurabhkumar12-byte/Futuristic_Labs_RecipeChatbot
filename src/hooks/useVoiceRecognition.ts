// src/hooks/useVoiceRecognition.ts

import { useState, useEffect } from 'react';
import Voice from 'react-native-voice';
import { SpeechResultsEvent, SpeechErrorEvent } from 'react-native-voice';

type UseVoiceRecognitionReturn = {
  isListening: boolean;
  startListening: () => void;
  stopListening: () => void;
};

export const useVoiceRecognition = (setQuery: (query: string) => void): UseVoiceRecognitionReturn => {
  const [isListening, setIsListening] = useState(false);

  const onSpeechResults = (event: SpeechResultsEvent) => {
    if (event.value && event.value.length > 0) {
      console.log("result",event.value[0])
      setQuery(event.value[0]);
    }
  };

  const onSpeechError = (event: SpeechErrorEvent) => {
    console.error(event.error);
  };

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.onSpeechResults = undefined; // Clean up by setting to undefined
      Voice.onSpeechError = undefined; // Clean up by setting to undefined
    };
  }, []);

  const startListening = async () => {
    try {
      await (Voice.start as (locale: string) => Promise<void>)('en-US'); // Type assertion
      setIsListening(true);
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    try {
      await (Voice.stop as () => Promise<void>)(); // Type assertion
      setIsListening(false);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    isListening,
    startListening,
    stopListening,
  };
};
