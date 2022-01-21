import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { Box, HStack, Input, Link, VStack, Text, Pressable } from 'native-base';
import React, { memo, useCallback, useState } from 'react'
import {isEqual} from 'lodash'
import { Keyboard, TouchableWithoutFeedback, View} from 'react-native'
import { HomePageHeader, Tab, PrimaryButton, FieldInput } from '../../components';
import { black, blue, rootColor } from '../../theme';
import { navigateParams } from '../../routes/Navigate';
import * as Yup from 'yup';

type StackScreen = NativeStackNavigationProp<navigateParams>;

const validate = Yup.object({
  Email: Yup.string().email().required('please fill the fiel'),
  Phone: Yup.string().required('please fill the fiel').min(10, 'number not correct').max(12, 'number not correct')
})

const index = () => {
  const [LoginByPhone, setLoginByPhone] = useState<string>('Email');
  const handleLogin = useCallback((item)=>setLoginByPhone(item), []);

  const navigation = useNavigation<StackScreen>();

  return (
    <Pressable onPress={Keyboard.dismiss}>

      <HomePageHeader />

      <HStack justifyContent={'space-evenly'} my={8} mx={20} maxHeight={80} >

        {// signup Tabs
          ['Phone', 'Email'].map((item, idx)=>(
          <Tab
            key={idx}
            title={item}
            onPress={()=>handleLogin(item)}
            borderColor={ LoginByPhone == item ? black[3] : black[1]}
            bg={LoginByPhone == item ? black[1] : black[1]}
            color={LoginByPhone == item ? black[5] : black[4]}
          />
          ))
        }

      </HStack>

      <VStack maxHeight={290} justifyContent={'space-between'}>
        <Formik
          initialValues={{
            Email: '',
            Phone: ''
          }}
          validationSchema ={validate}
          onSubmit={values => console.log(values)}
        >

        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
          <Box alignItems={'center'} justifyContent={'space-between'} height={48}>
            <FieldInput
              onChangeText={handleChange(LoginByPhone)}
              onBlur={handleBlur(LoginByPhone)}
              value={LoginByPhone=='Email' ? values.Email : values.Phone}
              placeholder={LoginByPhone == 'Email' ? 'johndoe@gmail.com' : 'Ex (337) 378 8383'}
              type={LoginByPhone == 'Email' ? 'email' : 'number'}
            />
            {
              // LoginByPhone == 'Email' && touched.Email && errors.Email ? console.log(isValid, errors.Email) : ''
            }

            <PrimaryButton title={'Continue'} onPress={handleSubmit} bg={isValid ? rootColor[2] : black[3]} />

            <Box>
              <Text fontSize={14}>by clicking continue you must agree to near labs
              <Link href='' _text={{ color: blue[4], textDecoration: 'none' }} > Terms & Conditions</Link> and
              <Link href='' _text={{ color: blue[4], textDecoration: 'none' }} > Privacy Policy</Link></Text>
            </Box>

          </Box>
        )}

        </Formik>

          <Box alignItems={'center'} my={6} height={20} justifyContent={'space-between'}>
            <Text fontSize={16}>Already have NEAR account?</Text>
            <PrimaryButton title={'Log in with NEAR'} onPress={()=>navigation.navigate('Login')} width={64} />
          </Box>

      </VStack>

    </Pressable>
  )
}

export default memo(index, isEqual)
