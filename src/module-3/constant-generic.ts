const addCrush2 = <T extends {name:string , age:number, height:number}>(myInfo1:T)=>{
    const crush = 'No One';
    const newCrush = {...myInfo1 , crush}
    return newCrush
}
const myInfo1 = {
    name:'Ashraf',
    age:21,
    height:5.5
}
const createCrush2 = addCrush2(myInfo1)