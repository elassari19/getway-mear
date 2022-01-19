import React, { FC } from 'react'
import { View, Text, TextInput } from 'react-native'

interface Props {
  value: string;
  onChangeText: (text : string) => void;
  placeholder?: string;
}

const index: FC<Props> = ({value, onChangeText, placeholder}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  )
}

export default index
