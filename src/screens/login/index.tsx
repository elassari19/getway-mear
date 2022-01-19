import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Field, Formik } from 'formik';
import { HStack, Pressable, Text } from 'native-base';
import React, { useState } from 'react'
import {Button, TextInput, View} from 'react-native'
import { HomePageHeader } from '../../components';
import { black, rootColor } from '../../theme';
import { navigateParams } from '../../routes/Navigate';

type StackScreen = NativeStackNavigationProp<navigateParams>;

const index = () => {

  const [LoginByPhone, setLoginByPhone] = useState<boolean>(false);

  const navigation = useNavigation<StackScreen>();

  return (
    <View>

      <HomePageHeader />

      <HStack justifyContent={'space-evenly'} my={8} mx={20} >

        <Pressable
          onPress={()=>setLoginByPhone(false)}
          borderRadius={20}
          borderColor={ !LoginByPhone ? black[3] : black[1]}
          borderWidth={2}
          bg={!LoginByPhone ? black[1] : black[1]}
          py="3"
          px="6"
        >
          <Text
            fontSize="16"
            fontWeight={'500'}
            color={!LoginByPhone ? black[5] : black[3]}
            >
            Phone
          </Text>
        </Pressable>
        <Pressable
          onPress={()=>setLoginByPhone(true)}
          borderRadius={20}
          borderColor={ LoginByPhone ? black[3] : black[1]}
          borderWidth={1}
          bg={LoginByPhone ? black[1] : black[1]}
          py="3"
          px="6"
        >
          <Text
            fontSize="16"
            fontWeight={'500'}
            color={LoginByPhone ? black[5] : black[3]}
          >
            Email
          </Text>
        </Pressable>


      </HStack>
      <Formik
        initialValues={{
          email: '',
          phone: ''
        }}
        onSubmit={values => console.log(values)}
      >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           style={{backgroundColor: 'red', padding: 20}}
         />
         <Button onPress={()=>handleSubmit()} title="Submit" />
       </View>
     )}
        {/* {
          LoginByPhone
          ?<Field type="phone" name="phone" placeholder="Ex (337) 378 8383" />
          :<Field type="email" name="email" placeholder="johndoe@gmail.com" />
        } */}


      </Formik>
    </View>
  )
}

export default index
