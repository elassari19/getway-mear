import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {Home} from '../../screens';
import appTheme from '../../theme';
import TabContainer from './TabContainer';

const Tab = createMaterialBottomTabNavigator();

const index = () => {
  return (
    <Tab.Navigator 
      initialRouteName='Home'
      barStyle={{backgroundColor: appTheme.COLORS.lightGray3}}
    >
      {
          tabScreens.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarTestID: tab.name,
              tabBarIcon: ({ focused }) => (
                // tab bottom icon and label
                <TabContainer label={tab.label} focused={focused} />
              )
            }}

          />
          ))
        }
    </Tab.Navigator>
  )
}

export default index

// array of screen 
const tabScreens = [
  {
    name: 'Home',
    component: Home,
    label: 'ios-home-outline',
  },
]