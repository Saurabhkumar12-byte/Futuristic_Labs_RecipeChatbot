import Voice from 'react-native-voice';

class VoiceService {
  constructor() {
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechResults = this.onSpeechResults;
  }

  onSpeechStart = () => {
    console.log('onSpeechStart');
  };

  onSpeechEnd = () => {
    console.log('onSpeechEnd');
  };

  onSpeechResults = (event: any) => {
    console.log('onSpeechResults', event);
  };

  async startListening() {
    try {
      if (typeof Voice.start === 'function') {
        await Voice.start('en-US');
      } else {
        console.error('Voice.start is not a function');
      }
    } catch (e) {
      console.error(e);
    }
  }

  async stopListening() {
    try {
      if (typeof Voice.stop === 'function') {
        await Voice.stop();
      } else {
        console.error('Voice.stop is not a function');
      }
    } catch (e) {
      console.error(e);
    }
  }

  async destroy() {
    try {
      if (typeof Voice.destroy === 'function') {
        await Voice.destroy();
      } else {
        console.error('Voice.destroy is not a function');
      }
    } catch (e) {
      console.error(e);
    }
  }
}

const voiceService = new VoiceService();
export default voiceService;
