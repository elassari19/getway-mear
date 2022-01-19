import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import appTheme from '../../theme';

interface Iprops {
  focused: boolean;
  label: string;
}

const TabContainer: FC<Iprops> = ({focused, label}) => {

  return (
    <View>
      <Ionicons name={label} size={24} color={focused ? appTheme.COLORS.white : appTheme.COLORS.black} />
    </View>
  )
}

export default TabContainer

