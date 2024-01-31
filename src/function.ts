// normal function 
function add(num1:number , num2:number):number{
    return num1 + num2;
}

// arrow function with default value
const addNumber = (num1:number , num2:number = 10 ) : number => num1 + num2


const friends = ['himel', 'shakib','tuhin','nahid','musfiq']

// ------- spread opareator 
const newFriends = ['simon','Akib' , 'ashif']
newFriends.push(...friends)
// console.log(newFriends)

// rest parameters 
const greetFriends = (...friends: string[]) : void => friends.forEach(friend => console.log(`Hi ${friend}`))

// greetFriends('Hassan','Akbar','Naim' , 'Akib' , 'Remon' , 'Riyad', 'Ali')

const person = {fullName :'Jahid' , age:20 , roll:5}

const [friend] = newFriends
console.log(friend)
const {fullName : newName} = person
console.log(newName)