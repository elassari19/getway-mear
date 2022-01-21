import React, { FC, memo } from 'react';
import { Pressable, Text } from 'native-base';



interface Props {
  onPress?: () => void;
  borderColor?: string;
  bg?: string;
  color?: string;
  width?: number;
  title: string;
}

const index: FC<Props> = ({ onPress, bg, width, color, borderColor, title}) => {
  return (
    <Pressable
      onPress={onPress}
      borderRadius={20}
      borderColor={borderColor}
      borderWidth={2}
      bg={bg}
      py={3}
      px={6}
      width={width}
    >
    <Text
      color={color}
      >
      {title}
    </Text>
  </Pressable>
  );
};

export default memo(index);
