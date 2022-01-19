import React, { ReactChild, ReactNode, useLayoutEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { handleArray } from '../../helper';

interface Props {
  children: ReactNode;
  flex?: number;
  flexRow?: boolean;
  rowReverse?: boolean;
  culomnReverse?: boolean;
  justifyCenter?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
  spaceEvenly?: boolean;
  flexStart?: boolean;
  flexEnd?: boolean;
  alignCenter?: boolean;
  alignStretch?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  alignBaseline?: boolean;
  wrap?: boolean;
  wrapReverse?: boolean;
  noWrap?: boolean;
  alignContent_s?: boolean;
  alignContent_c?: boolean;
  alignContent_f_s?: boolean;
  alignContent_f_e?: boolean;
  alignContent_s_b?: boolean;
  alignContent_s_a?: boolean;
  alignContent_s_e?: boolean;
  margin?: string;
}

const index: React.FC<Props> = ({children, margin, flexRow, justifyCenter, spaceBetween, spaceAround, spaceEvenly}, props) => {

  const { alignContent_s_b, alignContent_s_e, alignContent_s_a, alignContent_c, alignContent_s, alignContent_f_s, alignContent_f_e,rowReverse, culomnReverse, noWrap, wrapReverse, wrap, flex, flexEnd, flexStart, alignCenter, alignEnd, alignBaseline, alignStart, alignStretch } = props;

  const _margin = margin ? margin?.split(' ') : ['0', '0', '0', '0']

  const styles = StyleSheet.create({
    container: {
      flex: flex,
      flexDirection: flexRow && 'row' || rowReverse && 'row-reverse' || culomnReverse && 'culomn-reverse',
      justifyContent: justifyCenter && 'center' || spaceBetween && 'space-between' || spaceAround && 'space-around' || spaceEvenly && 'space-evenly' || flexStart && 'flex-start' || flexEnd && 'flex-end',
      alignItems: alignCenter && 'center' || alignEnd && 'flex-end' || alignStart && 'flex-start' || alignStretch && 'stretch'|| alignBaseline && 'baseline' ,
      alignContent: alignContent_c && 'center' || alignContent_s_e && 'space-evenly' || alignContent_s && 'stretch' || alignContent_s_b && 'space-between' || alignContent_s_a && 'space-around' || alignContent_f_s && 'flex-start' || alignContent_f_e && 'flex-end',
      flexWrap: wrap && 'wrap' || wrapReverse && "wrap-reverse" && noWrap|| 'nowrap',
      marginTop: +_margin[0] || 0,
      marginRight: +_margin[1] || +_margin[0] || 0,
      marginBottom: +_margin[2] || +_margin[0] || 0,
      marginLeft: +_margin[3] || +_margin[1] || +_margin[0] || 0,
    }
  })

  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

export default index
