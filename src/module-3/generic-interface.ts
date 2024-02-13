interface StudentGenericInterface <x,y,z>{
    name : string;
    age: number;
    roll: x;
    address:y;
    married: z;
}

interface AddressInterface {
    Upozala:string;
    Distic:string;
    Village?:string;
}

const addMessionStudent : StudentGenericInterface<number , AddressInterface , boolean> = {
    name:'Ashraf',
    age:21,
    roll:311467,
    address:{
      Upozala:'Ashuganj',
      Distic:'Brahmanbaria',
    //   Village:'Modupur'
    },
    married:false,
}