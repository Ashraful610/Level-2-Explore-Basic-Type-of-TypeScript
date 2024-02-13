let emni:any;

emni = 'Next Level Web Development';
(emni as string).length;
<string>emni.length;

function kgToGam (param : string | number ):string | number | undefined {
  if(typeof param === 'number'){
    const value = param * 1000;
    return value
  }
  else if(typeof param === 'string'){
    const value = parseFloat(param) * 1000
    return `This is ${value}`
  }
}

const kgIsString = kgToGam('2') as string
const kgIsNumber = <number>kgToGam(5)