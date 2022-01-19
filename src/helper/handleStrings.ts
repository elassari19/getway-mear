
const handleStringLength = (string:string,stringLength:number=50,suffixEnd:string='...') => {
  return string.length > stringLength ? string.slice(0, stringLength)+suffixEnd : string
}

export default handleStringLength;