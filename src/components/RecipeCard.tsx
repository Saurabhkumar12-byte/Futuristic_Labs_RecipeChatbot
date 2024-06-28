import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import {Recipe} from '../types/types';

interface RecipeCardProps {
  recipe: Recipe;
}

export const getStyles = (colorScheme: 'light' | 'dark') =>
  StyleSheet.create({
    cardContainer: {
      paddingHorizontal: 8,
      paddingVertical: 8,
    },
    card: {
      backgroundColor: colorScheme === 'dark' ? '#333' : '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
      padding: 16,
      marginBottom: 8,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 8,
      color: colorScheme === 'dark' ? '#fff' : '#333',
    },
    fieldContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginVertical: 2,
    },
    fieldName: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#ccc' : '#444',
      flex: 1,
    },
    fieldValue: {
      fontSize: 14,
      color: colorScheme === 'dark' ? '#ccc' : '#444',
      flex: 2,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 8,
      marginBottom: 8,
    },
    link: {
      color: colorScheme === 'dark' ? '#00aaff' : '#007aff',
      marginTop: 0,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      paddingVertical: 4,
    },
    summaryContainer: {
      marginTop: 8,
      marginBottom: 4,
    },
    summaryText: {
      color: colorScheme === 'dark' ? '#ccc' : '#444',
    },
    readMoreText: {
      color: colorScheme === 'dark' ? '#00aaff' : '#007aff',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      paddingVertical: 4,
    },
  });

const RecipeCard: React.FC<RecipeCardProps> = ({recipe}) => {
  const colorScheme = useColorScheme() || 'light';
  const styles = getStyles(colorScheme);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>{recipe.title}</Text>
        {recipe.image && (
          <Image source={{uri: recipe.image}} style={styles.image} />
        )}
        {recipe.healthScore !== undefined && (
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Health Score:</Text>
            <Text style={styles.fieldValue}>{recipe.healthScore}</Text>
          </View>
        )}
        {recipe.vegetarian !== undefined && (
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Vegetarian:</Text>
            <Text style={styles.fieldValue}>
              {recipe.vegetarian ? 'Yes' : 'No'}
            </Text>
          </View>
        )}
        {recipe.readyInMinutes !== undefined && (
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Ready in:</Text>
            <Text style={styles.fieldValue}>
              {recipe.readyInMinutes} minutes
            </Text>
          </View>
        )}
        {recipe.pricePerServing !== undefined && (
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Price per serving:</Text>
            <Text style={styles.fieldValue}>₹{recipe.pricePerServing}</Text>
          </View>
        )}
        {recipe.cheap !== undefined && (
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Cheap:</Text>
            <Text style={styles.fieldValue}>{recipe.cheap ? 'Yes' : 'No'}</Text>
          </View>
        )}
        {recipe.summary && (
          <View style={styles.summaryContainer}>
            <Text
              style={styles.summaryText}
              numberOfLines={isExpanded ? undefined : 4}
              ellipsizeMode="tail">
              {recipe.summary.replace(/<\/?[^>]+(>|$)/g, '')}
            </Text>
            <TouchableOpacity onPress={handleToggleExpand}>
              <Text style={styles.readMoreText}>
                {isExpanded ? 'Show Less' : 'Show More'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {recipe.sourceUrl && (
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(recipe.sourceUrl ?? '')}>
            View Full Recipe
          </Text>
        )}
      </View>
    </View>
  );
};

export default RecipeCard;
