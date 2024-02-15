const createArray =<T>(param:T):T[] => {
    return [param]
}
const result1 = createArray<string>('Bangladesh')
const result2 = createArray<number>(5)
const result3 = createArray<boolean>(true)  

// generic function with tuples
const createArray2 = <T , G >(param1:T , param2:G ):string => {
    const concat = param1 + ' ' + param2
    return concat
}

const result4 = createArray2<string , string>('Hello','Bangladesh')


// -------- use generic for spread operator --------------------
const addCrush = <T>(myInfo:T)=>{
    const crush = 'No One';
    const newCrush = {...myInfo , crush}
    return newCrush
}
const myInfo = {
    name:'Ashraf',
    age:21,
    height:5.5
}
const createCrush = addCrush(myInfo)