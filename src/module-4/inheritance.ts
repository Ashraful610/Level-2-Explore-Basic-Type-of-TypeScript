class CommonInterface {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number , address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours:number):string{
        return (`This ${this.name} will sleep ${hours}`)
    }
}


class Person  extends CommonInterface{
    constructor(name: string, age: number , address:string){
        super(name, age, address);
    }
}

const student1 = new Person('Ashraf' , 21 , 'Brahmanbaria')
console.log(student1.makeSleep(8))

class Teacher extends CommonInterface{
    destination: string;
    constructor(name: string, age: number, address: string , destination: string){
        super(name, age, address)
        this.destination = destination
    }
    classTime(takeClassTime:number):string{
        return (`This ${this.name} will take ${takeClassTime}`)
    }
}

const teacher = new Teacher('Roshid' , 52 , 'Ashuganj' , 'Araishidah')
console.log(teacher.makeSleep(7))
console.log(teacher.classTime(5))