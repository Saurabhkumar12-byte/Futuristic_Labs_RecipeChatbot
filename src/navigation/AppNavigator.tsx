import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useColorScheme, View, Text} from 'react-native';
import ChatbotScreen from '../screens/ChatbotScreen';
import {getStyles} from '../components/RecipeCard';
import ChatbotIcon from '../assets/icons/chatboxIcon';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const colorScheme = useColorScheme() || 'light';
  const styles = getStyles(colorScheme);
  const CustomHeaderTitle = () => (
    <View style={{alignItems: 'start'}}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: colorScheme === 'dark' ? '#fff' : '#000',
        }}>
        Futuristic Labs
      </Text>
      <Text
        style={{fontSize: 14, color: colorScheme === 'dark' ? '#ccc' : '#444'}}>
        Redefining Cooking
      </Text>
    </View>
  );

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View
        style={{
          flex: 1,
          backgroundColor: colorScheme === 'dark' ? '#333' : '#fff',
        }}>
        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: colorScheme === 'dark' ? '#333' : '#fff',
              borderTopColor: 'transparent',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
            },
            labelStyle: {
              color: colorScheme === 'dark' ? '#fff' : '#000',
            },
          }}>
          <Tab.Screen
            name="Chatbot"
            component={ChatbotScreen}
            options={{
              tabBarLabel: 'Chatbot',
              tabBarIcon: ({color, size}) => <ChatbotIcon />,
              headerTitle: () => <CustomHeaderTitle />,
            }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default AppNavigator;
