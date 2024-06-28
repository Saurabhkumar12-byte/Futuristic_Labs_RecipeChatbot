import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useColorScheme} from 'react-native';

const Header = () => {
  const colorScheme = useColorScheme() || 'light';

  return (
    <View
      style={[
        styles.header,
        {backgroundColor: colorScheme === 'dark' ? '#000' : '#fff'},
      ]}>
      <Svg height="30" width="30" viewBox="0 0 24 24">
        <Path
          fill={colorScheme === 'dark' ? '#fff' : '#000'}
          d="M12 2c-1.1 0-2 .9-2 2v6H7l5 5 5-5h-3V4c0-1.1-.9-2-2-2z"
        />
      </Svg>
      <Text
        style={[
          styles.title,
          {color: colorScheme === 'dark' ? '#fff' : '#000'},
        ]}>
        App Title
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Header;
