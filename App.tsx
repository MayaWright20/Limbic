import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BottomTabsNavigator from "./navigation/BottomTabsNavigatior"

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <BottomTabsNavigator/>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};
