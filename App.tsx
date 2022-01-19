import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import RootApp from './src/routes';
// import store from './src/store';

export default function App() {

  return (
    // <Provider store={store}>
      <NativeBaseProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar style="auto" />
        <RootApp />
      </SafeAreaView> 
      </NativeBaseProvider>
    // </Provider>
  );
}
