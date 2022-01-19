import React from 'react'
import { Text } from 'native-base'
import { Header } from '..'
import Brand from '../../assets/icons/brand1.svg'
import { rootColor } from '../../theme'

const index = () => {
  return (
    <Header>
        <Brand width={28} height={28} />
        <Text fontSize={22} color={rootColor[1]} >Home</Text>
        <Text fontSize={22}>Page</Text>
      </Header>
  )
}

export default index
