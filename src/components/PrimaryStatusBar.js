import React, { useEffect, memo } from 'react';
import { StatusBar, Platform } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import colors from '../common/colors';

const PrimaryStatusBar = memo(({ children }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(colors.primary, true);
      }
      StatusBar.setBarStyle('light-content', true);
    }
  }, [isFocused]);

  return children ?? null;
});

export default PrimaryStatusBar;
