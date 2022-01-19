import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { font,flex,padding,margin,borderWidth,borderColor,borderRadius,boxShadow,colors,dimensions } from './styles';

interface IProps {
  onPress?: ()=> void,
  children: any ,
  styles: {},
  ifont?:any[];
  iflex?:any[];
  ipadding?:any[];
  imargin?:any[];
  iborderWidth?:any[];
  iborderColor?:any[];
  iborderRadius?:any[];
  iboxShadow?:any[];
  icolors?:any[];
  idimensions?:any[];
  overflow?: string;
}

const index = (
  {
    onPress,
    children,
    styles,
    ifont,
    iflex,
    imargin,
    ipadding,
    iborderWidth,
    iborderColor,
    iborderRadius,
    iboxShadow,
    icolors,
    idimensions,
    overflow= 'hidden',
  }: any
) =>{

  return(
    <View
      style={[
        {overflow: overflow},
        flex(iflex),
        padding(ipadding),margin(imargin),
        borderWidth(iborderWidth),borderColor(iborderColor),borderRadius(iborderRadius),
        boxShadow(iboxShadow),
        colors(icolors),
        dimensions(idimensions),
        styles
      ]}
    >
    
      <Pressable onPress={onPress}>

        <Text
          style={[font(ifont)]}
        >

          {children}

        </Text>

      </Pressable>
    </View>
  )
}

export default index
