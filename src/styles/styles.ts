// src/styles/styles.ts

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff', // Default background color for light mode
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4, // Android shadow
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  tabBarIcon: {
    width: 24,
    height: 24,
  },
  tabBarLabel: {
    fontSize: 12,
    marginTop: 2,
  },
  container: {
    flex: 1,
    padding: 12,
  },
  FlatlistContainer: {
    flex: 1,
    padding: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    marginVertical: 10,
  },
  buttonContainer: {
    marginVertical: 8,
  },
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
