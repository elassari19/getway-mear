import { Pressable, Text } from 'native-base';
import React, { FC } from 'react';
import { black } from '../../theme';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  onPress?: () => void;
  borderColor?: string;
  bg?: string;
  color?: string;
  width?: number;
  title: string;
}

const index: FC<Props> = ({ onPress, title, width=48, color=black[1], bg=black[5], borderColor=black[7] }) => {
  return (
    <Pressable
    onPress={onPress}
    bg={bg}
    color={color}
    width={width}
    borderColor={borderColor}
    fontSize={18}
    px={6} py={3}
    borderRadius={18}
    flexDirection={'row'}
    justifyContent={'space-between'}
    alignItems={'center'}
  >
    <Text
      color={black[1]}
      fontSize={20}
    >
      {title}
    </Text>
    <MaterialIcons name="arrow-forward-ios" size={24} color={black[1]} />
  </Pressable>

  );
};

export default index;
