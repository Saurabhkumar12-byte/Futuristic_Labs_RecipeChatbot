# Recipe Chatbot

## Screenshots
Welcome to the Recipe Chatbot project! Here's a screenshot of our app in action:

![App Screenshot](src/assets/images/listen.jpg)
![App Screenshot](src/assets/images/local.jpg)
![App Screenshot](src/assets/images/overview.jpg)
![App Screenshot](src/assets/images/seach.jpg)
![App Screenshot](src/assets/images/darkmode.jpg)


## Overview

The Recipe Chatbot is a React Native application that allows users to search for food recipes using text input or voice recognition. It integrates with the Spoonacular API to fetch recipes based on user queries and displays detailed information including ingredients and cooking instructions.


## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Saurabhkumar12-byte/Futuristic_Labs_RecipeChatbot.git
    cd RecipeChatbot
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Add your Spoonacular API key:**
    - Register [here](https://spoonacular.com/food-api) and grab your **API key**
    - Create a `.env` file in the root of the project:

    ```
    SPOONACULAR_API_KEY=your_api_key_here
    ```

4. **Run the project:**
    - For Android:
    ```bash
    npx react-native run-android
    ```
    - For iOS:
    ```bash
    npx react-native run-ios
    ```

## Features

- **Text Input and Voice Recognition:** Allows users to query recipes either by typing or using voice commands.
- **Integration with Spoonacular API:** Fetches recipes based on user queries.
- **Recipe Details:** Displays ingredients and cooking instructions for each recipe.
- **Local Storage:** Saves searched recipes for offline access.

## Libraries Used

- `react-navigation` for navigation.
- `react-native-voice` for voice recognition.
- `axios` for API requests.
- `async-storage` for local storage.

## Folder Structure

```
RecipeChatbot/
├── android/
├── ios/
├── src/
│   ├── api/
│   │   └── recipeApi.ts         # API functions for fetching recipes
│   ├── components/
│   │   └── RecipeCard.tsx       # Component for displaying recipe details
│   ├── hooks/
│   │   └── useVoiceRecognition.ts# Custom hook for voice recognition
│   ├── navigation/
│   │   └── AppNavigator.tsx     # Navigation setup using react-navigation
│   ├── screens/
│   │   └── ChatbotScreen.tsx    # Chatbot screen with recipe search functionality
│   ├── services/
│   │   ├── localStorage.ts      # Functions for saving and loading data locally
│   │   └── voiceService.ts      # Integration with voice recognition service
│   ├── styles/
│   │   └── styles.ts            # Common styles for the application
│   ├── types/
│   │   └── types.ts             # Type definitions used across the app
│   └── utils/
│       └── helpers.ts           # Utility functions and helpers
├── .env                          # Environment variable for API key
├── App.tsx                       # Main entry point of the application
├── README.md                     # This readme file
├── package.json
└── tsconfig.json
```


## Usage

1. **Chatbot Screen:**
   - Enter a query in the text input or use voice recognition to search for recipes.
   - Tap "Find Recipes" to fetch and display recipes based on the query.
   - Toggle voice recognition with the "Listen Now" / "Stop Listening" button.

2. **Navigation:**
   - Navigate between screens using the bottom tab bar.
   - Currently, the app only includes the "Chatbot" tab.

## Notes

- Ensure all dependencies are installed before running the application.
- Handle edge cases and errors gracefully, providing meaningful error messages.
- This project is designed as a functional prototype, focusing on core features over UI polish.
