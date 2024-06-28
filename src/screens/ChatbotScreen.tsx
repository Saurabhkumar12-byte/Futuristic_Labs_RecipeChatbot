import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {fetchRecipes} from '../api/recipeApi';
import {useVoiceRecognition} from '../hooks/useVoiceRecognition';
import RecipeCard from '../components/RecipeCard';
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from '../services/localstorage';
import commonStyles from '../styles/styles'; // Import common styles from styles/styles.ts
import {Recipe} from '../types/types';

const ChatbotScreen = () => {
  const [query, setQuery] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const {startListening, stopListening, isListening} = useVoiceRecognition(
    setQuery,
    fetchRecipes,
    query,
  );
  const colorScheme = useColorScheme() || 'light';

  const handleFetchRecipes = async () => {
    try {
      const results = await fetchRecipes(query);
      setRecipes(results);
      await saveToLocalStorage('lastQuery', results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    const loadLastQuery = async () => {
      try {
        const lastQuery = await getFromLocalStorage('lastQuery');
        if (lastQuery) {
          setRecipes(lastQuery);
        }
      } catch (error) {
        console.error('Error loading last query from local storage:', error);
      }
    };

    loadLastQuery();
  }, []);

  return (
    <View
      style={[
        commonStyles.container,
        {backgroundColor: colorScheme === 'dark' ? '#1e1e1e' : '#f5f5f5'},
      ]}>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: colorScheme === 'dark' ? '#333' : '#fff',
            color: colorScheme === 'dark' ? '#ccc' : '#333',
          },
        ]}
        placeholder="What do you want to cook today?"
        placeholderTextColor={colorScheme === 'dark' ? '#888' : '#aaa'}
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        style={{flex: 1}}
        data={recipes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <RecipeCard recipe={item} />}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#FFA500'}]}
          onPress={handleFetchRecipes}>
          <Text style={styles.buttonText}>Find Recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#3CB371'}]}
          onPress={isListening ? stopListening : startListening}>
          <Text style={styles.buttonText}>
            {isListening ? 'Stop Listening' : 'Listen Now'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    // paddingVertical: 8,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ChatbotScreen;
