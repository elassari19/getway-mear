import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigateParams } from '../../routes/Navigate';
import {TextInput} from '../../components'

type StackScreen = NativeStackNavigationProp<navigateParams>;

const index: FC<StackScreen> = () => {

  const navigation = useNavigation<StackScreen>();

  const [value, setValue] = useState<string>('');
  const onChange = (text: string) => {
    setValue(text);
  }

  return (
    <View>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={values => console.log(values)}
      >
        <TextInput value={value} onChangeText={onChange} placeholder={'full name'} />

      </Formik>

      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>console.log(value)}>
        <Text>console</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index
