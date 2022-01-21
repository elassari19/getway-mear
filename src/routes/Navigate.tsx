import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {Login, Home, Signup} from '../screens'

export type navigateParams = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
}
const Stack = createNativeStackNavigator<navigateParams>();

const Navigate = () => {
  return (
    <Stack.Navigator initialRouteName='Signup' >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default Navigate
