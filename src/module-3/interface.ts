interface IUser {
    name : string;
    age: number;
}

interface ExtendedUser extends IUser {
    roll:number;
}

const newUser : ExtendedUser = {
    name:'Ashraful',
    age:21,
    roll:478009
}