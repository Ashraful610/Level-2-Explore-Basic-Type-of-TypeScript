// ---------- Primitive types  in TypeScript --------------------------------
/*
 1 . String 
 2 . Number
 3 . Boolean
 4 . null
 5 . undefined
 6 . symbol
 7 . Any
*/ 

// string 
let course = 'Next Level Web Development';
course = 'Next Level Development';

// number 
let result : number = 5;
result = 8

// boolean
let student = true;
student = false;

// undefined
const job = undefined;

// null 
let salary = null;
salary = 12000;

// --------- array and tuples in typescript --------------------------------
const newNames = ['ashraf' , 'asif' , 'akib' ,'rahim']
// newNames.forEach(name => )


const points = [33 , 99 , 55 , 66 ,77 , 88]
// points.forEach(point => point.)

const pepople = ['hkim' , 55 , true]

// tuples 
const books : [string, number] = ['pilar of success' , 330]


// object and object literals
const newStudent : {
    name: 'Mohammad Mutafizur Rahman',
    age: number,
    height: number,
    maried?: boolean
} = {
    name: 'Mohammad Mutafizur Rahman',
    age:20,
    height:5.5,
} 

// normal function in typescript 
function add(num1: number, num2: number):number{
    return num1 + num2;
}
add(2 , 5)

// arrow function in typescript
const addNumbers = (num1: number, num2: number):number => num1 + num2;

const mathMarks = [2 , 5 , 6 ,9 , 3 , 4 , 9 ]
const totalMarks = mathMarks.map((mark : number):number => mark * mark)

const studentInfo : {
    name: string,
    balance: number,
    addBalance(newBalance:number): void
} = {
    name:'Hatimo',
    balance: 5,
    addBalance(newBalance: number): void{
        console.log(`My new balance is ${this.balance + newBalance}`)
    }
}
studentInfo.addBalance(10)
// spread operator
const newFriend = ['tamim' , 'tuhin' , 'tushar' , 'tofzzol']
const oldFriend = ['rejaul' , 'sizan' , 'himel' , 'ashif']
const totalFriends = [...newFriend , ...oldFriend]
console.log(totalFriends)

// rest parameters
const greetingsFriends = (...friends: string[]) : void =>{
    friends.forEach(friend => console.log(`HI ${friend}`))
}
greetingsFriends('nahid' ,'sabbir' , 'himel' , 'tohin' , 'shorov')