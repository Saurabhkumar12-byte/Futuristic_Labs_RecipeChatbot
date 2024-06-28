// src/types/types.ts

// export interface Recipe {
//     id: number;
//     title: string;
//     ingredients: string[];
//     instructions: string;
//   }
  
  export interface VoiceRecognitionResults {
    value: string[];
  }
  

// src/types/types.ts
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


