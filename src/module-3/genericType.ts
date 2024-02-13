
type GenericType<T> = Array<T>

const rollNumbers1 : GenericType<number>= [1, 2, 3, 4]
const rollNumbers2 : GenericType<string>= ['1', '2', '3', '4']
const rollNumbers3 : GenericType<boolean> = [true, false]

// generic tuple 
type GenericTuples <x, y> = [x , y]

type relationType = {
    name : string,
    age: number,
    roll?: number
}

interface RelationType {
    name : string,
    age: number,
    roll?: number
}

const relation1 : GenericTuples<RelationType , string> = [
    {
        name:'ashraf',
        age:21,
        roll:478009
    }, 
    'True Nested'
]
const relation2 : GenericTuples<RelationType , string> = [
    {
        name:'ashraf',
        age:21
    }, 
    'True Nested'
]
const relation3 : GenericTuples<RelationType , string> = [
    {
        name:'ashraf',
        age:21,
        roll:478009
    }, 
    'True Nested'
]

