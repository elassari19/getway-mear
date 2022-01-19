import { Box, HStack } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { black } from '../../theme'

interface Props {
  children: React.ReactChildren;
}

const index: React.FC = ({children}) => {
  return (
    <Box bg={black[2]} py={4} alignItems={'center'} justifyContent={'center'} >
      <HStack justifyContent={'center'}>
        {children}
      </HStack>
    </Box>
  )
}

export default index
