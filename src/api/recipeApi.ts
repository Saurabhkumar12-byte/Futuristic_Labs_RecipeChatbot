import axios from 'axios';
import {SPOONACULAR_API_KEY} from '@env';
import {Recipe} from '../types/types';
import Toast from 'react-native-simple-toast';

const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
});

export const fetchRecipes = async (query: string): Promise<Recipe[]> => {
  const response = await api.get(`/complexSearch`, {
    params: {
      query,
      apiKey: SPOONACULAR_API_KEY,
      addRecipeInformation: true,
      number: 10,
    },
  });
  Toast.show('here are your recipes', Toast.SHORT);

  return response.data.results.map((item: any) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    sourceUrl: item.sourceUrl,
    healthScore: item.healthScore,
    vegetarian: item.vegetarian,
    readyInMinutes: item.readyInMinutes,
    pricePerServing: item.pricePerServing,
    cheap: item.cheap,
    summary: item.summary,
  }));
};
