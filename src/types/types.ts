  export interface VoiceRecognitionResults {
    value: string[];
  }
  

export interface Recipe {
  id: number;
  title: string;
  image?: string;
  sourceUrl?: string;
  healthScore?: number;
  vegetarian?: boolean;
  readyInMinutes?: number;
  pricePerServing?: number;
  cheap?: boolean;
  summary?: string;
}


