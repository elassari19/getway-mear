import React from 'react'
import { Pressable, StyleProp, ViewStyle } from 'react-native'
import { handleArray, handleShorts } from '../helper';
// import { handleArray, handleShorts } from ';

const index = (
  {
    children,
    onPress,
    styles,
    flex= [ {flexDirection: 'column'}, {flex: 'auto'}, {flewWrap: 'no-wrap'}, {flexBasis: 'auto'} ],
    flexItems= [, {justifyContent: 'start'} , {alignItems: 'stretch'}, {alignSelf: 'stretch'} ],
    dimensions= [ {width: null}, {height: null}],
    padding= [{paddingTop: 0}, {paddingRight: 0}, {paddingBottom: 0}, {paddingLeft: 0}],
    margin=  [{marginTop: 0}, {marginRight: 0}, {marginBottom: 0}, {marginLeft: 0}],
    border = [ {width: undefined}, {color: undefined}, {radius: undefined}],
    borderWidth = [ {top: 0}, {right: 0}, {bottom: 0}, {left: 0}],
    borderColor = [ {top: ''}, {right: ''}, {bottom: ''}, {left: ''}],
    borderRadius = [ {topLeft: 0},{topRight: 0}, {bottomRight: 0}, {bottomLeft: 0}],
    colored= [ {backgroundColor :null}, {color: null}],
    shadow= [ {width: null}, {height: null}, {color: null}, {shadowOpacity: null}, {shadowRadius: null}],
    overflow= 'hidden',

  }
) =>{

  // handle the array data of border width
  let widthBorder = handleShorts(borderWidth, border[0]);

  // handle the array data of border color
  let colorBorder = handleShorts(borderColor, border[1]);

  // handle the array data of border radius
  let radiusBorder = handleShorts(borderRadius, border[2]);

  // handle the array data of view padding
  let shortPadding = handleArray(padding);

  // handle the array data of view margin
  let shortMargin = handleArray(margin);

  return(
    <Pressable
    onPress={onPress}
    style={[
      {
        // flexbox options
        flexDirection: flex[0],
        flex: flex[1],
        flexWrap: flex[2],
        flexBasis: flex[3],
        justifyContent: flexItems[0],
        alignItems: flexItems[1],
        alignSelf: flexItems[2],
        // dimensions of item
        width: dimensions[0],
        height: dimensions[1],
        // padding of item
        paddingTop: shortPadding[0],
        paddingRight: shortPadding[1],
        paddingBottom: shortPadding[2],
        paddingLeft: shortPadding[3],
        // margin of item
        marginTop: shortMargin[0],
        marginRight: shortMargin[1],
        marginBottom: shortMargin[2],
        marginLeft: shortMargin[3],
        // the border width
        borderTopWidth:  widthBorder[0] ,
        borderRightWidth: widthBorder[1] ,
        borderBottomWidth: widthBorder[2] ,
        borderLeftWidth: widthBorder[3] ,
        // the border color
        borderTopColor: colorBorder[0],
        borderRightColor: colorBorder[1],
        borderBottomColor: colorBorder[2],
        borderLeftColor: colorBorder[3],
        // the border radius
        borderTopLeftRadius: radiusBorder[0],
        borderTopRightRadius: radiusBorder[1],
        borderBottomRightRadius: radiusBorder[2],
        borderBottomLeftRadius: radiusBorder[3],
        // color of item
        backgroundColor: colored[0],
        color: colored[1],
        // the shadow features
        shadowOffset:{
          width: shadow[0],
          height: shadow[1],
        },
        shadowColor: shadow[2],
        shadowOpacity: shadow[3],
        shadowRadius: shadow[4],
        elevation: 2,
        overflow: overflow,
      },
    styles
   ]}>


        {children}

      </Pressable>

  )
}

export default index
