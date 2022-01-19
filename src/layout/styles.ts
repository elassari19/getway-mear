import { Dimensions, StyleSheet } from "react-native";

export const flex = (features: any[]) => {

  return (
    {
    flex: features[0],
    flexDirection: features[1],
    justifyContent: features[2],
    alignItems: features[3],
    flexWrap: features[4],
    flexBasis: features[5],
    alignSelf: features[6],
  }
  )
}

export const padding = (padding: any[]) => {

  // check if the value is exist
  let type3 = typeof padding[3] == 'number';
  let type2 = typeof padding[2] == 'number';
  let type1 = typeof padding[1] == 'number';
  let type0 = typeof padding[0] == 'number';

  // handle the input values
  let i3 = type3 ? padding[3] : type1 ? padding[1] : type0 ? padding[0] : null;
  let i2 = type2 ? padding[2] : type0 ? padding[0] : null;
  let i1 = type1 ? padding[1] : type0 ? padding[0] : null;
  let i0 = type0 ? padding[0] : null;

  return (
    {
      paddingTop: i0,
      paddingRight: i1,
      paddingBottom: i2,
      paddingLeft: i3,
    }
  )
}

export const margin = (margin: any[]) => {

  // check if the value is exist
  let type3 = typeof margin[3] == 'number';
  let type2 = typeof margin[2] == 'number';
  let type1 = typeof margin[1] == 'number';
  let type0 = typeof margin[0] == 'number';

  // handle the input values
  let i3 = type3 ? margin[3] : type1 ? margin[1] : type0 ? margin[0] : null;
  let i2 = type2 ? margin[2] : type0 ? margin[0] : null;
  let i1 = type1 ? margin[1] : type0 ? margin[0] : null;
  let i0 = type0 ? margin[0] : null;

  return (
    {
    marginTop: i0,
    marginRight: i1,
    marginBottom: i2,
    marginLeft: i3
  }
  )
}
export const borderWidth = (border: any[]) => {

  // check if the value is exist
  let type3 = typeof border[3] == 'number';
  let type2 = typeof border[2] == 'number';
  let type1 = typeof border[1] == 'number';
  let type0 = typeof border[0] == 'number';

  // handle the input values
  let i3 = type3 ? border[3] : type1 ? border[1] : type0 ? border[0] : null;
  let i2 = type2 ? border[2] : type0 ? border[0] : null;
  let i1 = type1 ? border[1] : type0 ? border[0] : null;
  let i0 = type0 ? border[0] : null;

  return (
    {
    borderTopWidth: i0,
    borderRightWidth: i1,
    borderBottomWidth: i2,
    borderLeftWidth: i3
  }
  )
}

export const borderColor = (color: any[]) => {

  // check if the value is exist
  let type3 = typeof color[3] == 'string';
  let type2 = typeof color[2] == 'string';
  let type1 = typeof color[1] == 'string';
  let type0 = typeof color[0] == 'string';

  // handle the input values
  let i3 = type3 ? color[3] : type1 ? color[1] : type0 ? color[0] : null;
  let i2 = type2 ? color[2] : type0 ? color[0] : null;
  let i1 = type1 ? color[1] : type0 ? color[0] : null;
  let i0 = type0 ? color[0] : null;

  return (
    {
    borderTopColor: i0,
    borderRightColor: i1,
    borderBottomColor: i2,
    borderLeftColor: i3
  }
  )
}

export const borderRadius = (color: any[]) => {

  // check if the value is exist
  let type3 = typeof color[3] == 'number';
  let type2 = typeof color[2] == 'number';
  let type1 = typeof color[1] == 'number';
  let type0 = typeof color[0] == 'number';

  // handle the input values
  let i3 = type3 ? color[3] : type1 ? color[1] : type0 ? color[0] : null;
  let i2 = type2 ? color[2] : type0 ? color[0] : null;
  let i1 = type1 ? color[1] : type0 ? color[0] : null;
  let i0 = type0 ? color[0] : null;

  return (
    {
    borderTopLeftRadius: i0,
    borderTopRightRadius: i1,
    borderBottomRightRadius: i2,
    borderBottomLeftRadius: i3,
  }
  )
}

export const font = (array: any[]) => {
  return(
    {
    fontSize: array[0],
    fontWeight: array[1],
    textAlign : array[2],
    flexWrap: array[3],
    lineHeight: array[4],
    letterSpacing: array[5],
    textTransform: array[6],
  }
  )
}


export const boxShadow = (shadow: any[]) => {
  return (
    {
    shadowOffset:{
      width: shadow[0],
      height: shadow[1],
    },
    shadowColor: shadow[2],
    shadowOpacity: shadow[3],
    shadowRadius: shadow[4],
    elevation: shadow[5],
    
  }
  )
}

export const colors = (colors: any[]) => {
  return ({
    color: colors[1],
    backgroundColor: colors[0]
  })
}

export const dimensions = (width: number, height?: number) => {
  let w = width<=10 ? Dimensions.get('window').width : width
  return ({
    width: w,
    height
})
}


const theme = {
  color: '#3338'
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: theme.color,
  },
  found: {
    fontSize: 18,
    color: '#000',
    fontWeight: '400'
  },
  change:{
    fontSize: 12,
    color: theme.color
  },
  upArrow: {
    width: 10,
    height: 10,
  }
})

export default styles;