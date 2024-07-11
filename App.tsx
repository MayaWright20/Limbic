import * as React from 'react';
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import BottomTabsNavigator from "./navigation/BottomTabsNavigatior"
import { store } from './redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <BottomTabsNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
