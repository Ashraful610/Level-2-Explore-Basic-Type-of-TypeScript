function createTypeOf <X , Y extends typeof X>(obj:X , key:Y){
    obj[key] 
}

interface user {
    name : string;
    age:number
}
const resultTypeOf = createTypeOf(user,'age')