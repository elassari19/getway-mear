import { View, Text, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import React, { FC, memo } from 'react';
import { Input } from 'native-base';
import { black } from '../../theme';
import {isEqual} from 'lodash'

interface Props {
  onChangeText: (text: string)=> void,
  onBlur: (text: NativeSyntheticEvent<TextInputFocusEventData>)=>void,
  value: string;
  LoginByPhone?: string;
  placeholder?: string;
  type?: string;
  secureTextEntry?: boolean
}
const index: FC<Props> = ({onChangeText, onBlur, value, placeholder, type, secureTextEntry}) => {

  return (
    <>
      <Input
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        px={4} py={4}
        borderRadius={8}
        height={12} width={320}
        fontSize={18}
        borderWidth={1}
        borderColor={black[5]}
        type={type}
        keyboardType={type == 'email' ? 'email-address' : 'numeric'}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

export default memo(index);
