type Alphanumeric = string | number
// keyof guard
function add (param1:Alphanumeric, param2:Alphanumeric){
    if(typeof param1 === 'number' && typeof param2 === 'number'){
        return param1 + param2;
    }
    else{
        return param1.toLocaleString() + param2.toLocaleString();
    }
}

// console.log(add(3 , 5))
// console.log(add('1' , '7'))


// in guard 
type normalUserType = {
    name: string
}
type AdminUserType ={
    name: string;
    role:'Admin'
}

function checkUser(user:normalUserType | AdminUserType) : string {
    if('role' in user){
        return(`This is an admin user`)
    }
    else{
        return('This is an normal user')
    }
}

const user1 : normalUserType = {name:'Tarek'}
const user2 : AdminUserType = {name:'Musfiqur' , role:'Admin'}

// console.log(checkUser(user1))
// console.log(checkUser(user2))

class Animal {
    name:string;
    species:string;
    constructor(name:string, species:string){
        this.name = name;
        this.species = species;
    }
    makeSounde():string{
        return ('Ei poshota shobshomoy awaj kore')
    }
}

class Dog extends Animal{
    constructor(name:string,species:string){
        super(name,species);
    }
    makeDogSound(){
       console.log('Dog is always sounding')
    }
}

class Cat extends Animal{
    constructor(name:string,species:string){
        super(name,species);
    }
    makeCatSound(){
       console.log('Cat is always sounding')
    }
}

function getAnimal(animal:Animal){
    if(animal instanceof Dog){
        animal.makeDogSound();
    }
    else if(animal instanceof Cat){
        animal.makeCatSound();
    }
    else{
        animal.makeSounde()
    }
}

const Animal1 = new Dog('Germany Spachish' , 'Dog')
const Animal2 = new Cat('Farchi' , 'Cat')

getAnimal(Animal1)
getAnimal(Animal2)