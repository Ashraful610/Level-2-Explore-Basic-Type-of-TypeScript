// null type
const nameSearch = (value:string | null) => {
    if(value === null){
        console.log('There is nothing to search')
    }
    else{
        console.log('Searching.....')
    }
}
nameSearch(null)

// unKnown type
const getMyCarSpeed = (speed:unknown) => {
  if(typeof speed === 'number'){
    const carSpeed = (speed * 1000) / 3600
    console.log(carSpeed)
  }
  else if(typeof speed === 'string'){
    const [value , unit] = speed.split(' ')
    const carSpeed = (parseFloat(value) * 1000) / 3600
    console.log(carSpeed)
  }
  else{
    console.log('this is wrong type')
  }
}
getMyCarSpeed(10)
getMyCarSpeed('10 km^h')

function throwError(message:string):never{
    throw new Error(message)
}

throwError('Bhai eto pera valo lage na , life is nothing')