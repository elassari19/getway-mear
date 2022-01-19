import React, { ReactChild } from 'react'
import { View, Text, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'

interface Props {
  children: ReactChild;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const index: React.FC<Props> = ({children, styles, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles]}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

export default index
