const million = 1000000,
      thousand = 1000;

const ConvertNumbers = (number=0,toFix=1) => {

  return number >= million
          ? `${(number / million).toFixed(toFix)}M `
          : number >= thousand
          ? `${(number / thousand).toFixed(toFix)}K `
          : `${number} `
}

export default ConvertNumbers;