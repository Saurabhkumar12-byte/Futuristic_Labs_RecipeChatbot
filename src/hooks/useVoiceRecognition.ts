import {useState, useEffect} from 'react';
import Voice from 'react-native-voice';
import {SpeechResultsEvent, SpeechErrorEvent} from 'react-native-voice';
import Toast from 'react-native-simple-toast';

type UseVoiceRecognitionReturn = {
  isListening: boolean;
  startListening: () => void;
  stopListening: () => void;
};

export const useVoiceRecognition = (
  setQuery: (query: string) => void,
  fetchResults: (query: string) => void,
  query: string,
): UseVoiceRecognitionReturn => {
  const [isListening, setIsListening] = useState(false);

  const onSpeechResults = (event: SpeechResultsEvent) => {
    if (event.value && event.value.length > 0) {
      setQuery(event.value[0]);
      fetchResults(query);
    }
  };

  const onSpeechError = (event: SpeechErrorEvent) => {
    console.error(event.error);
    Toast.show('Unable to here you!', Toast.SHORT);
  };

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.onSpeechResults = undefined;
      Voice.onSpeechError = undefined;
    };
  }, []);

  const startListening = async () => {
    try {
      await (Voice.start as (locale: string) => Promise<void>)('en-US');
      setIsListening(true);
      Toast.show('listening you..', Toast.SHORT);
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    try {
      await (Voice.stop as () => Promise<void>)();
      Toast.show('listening stops..', Toast.SHORT);

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
