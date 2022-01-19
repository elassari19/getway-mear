import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigtionDefaultTheme } from '@react-navigation/native';
import { DarkTheme as PaperDarkTheme, Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabBottomScreen from './bottomTab';
import Navigate from './Navigate';

export type RootStackParams = {
  navigate: undefined;
  tabBottomScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <PaperProvider theme={PaperDarkTheme}>
      <NavigationContainer  >
        <Stack.Navigator>
          <Stack.Screen name='navigate' component={Navigate} options={{headerShown: false}} />
          <Stack.Screen name='tabBottomScreen' component={TabBottomScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

