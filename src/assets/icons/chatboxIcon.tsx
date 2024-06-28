import React from 'react';
import {SvgXml} from 'react-native-svg';
import {useColorScheme} from 'react-native';
import {useTheme} from '@react-navigation/native';

const ChatbotIcon = () => {
  const colorScheme = useColorScheme() || 'light';
  const {colors} = useTheme();

  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="${
        colorScheme === 'dark' ? colors.text : '#000000'
      }" d="M3.937 2h16.126c.626 0 1.137.49 1.137 1.09v13.82c0 .602-.51 1.09-1.137 1.09H12.32l-5.115 3.405a1.09 1.09 0 0 1-1.945-.76V3.09c0-.6.51-1.09 1.136-1.09zM4 4.164v13.4l4.92-3.28H20V3.09H4v1.075zm8.277 7.35h3.195a.546.546 0 0 0 0-1.09H12.28a.546.546 0 0 0 0 1.09zM8.723 8.54a.546.546 0 0 0 0 1.09h7.554a.546.546 0 1 0 0-1.09H8.723z"/>
    </svg>
  `;

  return <SvgXml xml={svgContent} />;
};

export default ChatbotIcon;
