const makePromise = ():Promise<string> => {
  return  new Promise<string>((resolve , reject)=>{
        const data:string = 'Data is fetch'
        if(data){
            resolve(data)
        }
        else{
            reject('failed to fetch data')
        }
    })
}
const getPromiseData = async ():Promise<string> => {
    const data = await makePromise()
    return data
}

const makePromiseBoolean = ():Promise<boolean> => {
  return  new Promise<boolean>((resolve , reject)=>{
    const data:boolean = true
    if(data){
        resolve(data)
    }
    else{
        reject('failed to fetch data')
    }
  })
}

const getPromiseBoolean = async ():Promise<boolean> => {
    const data = await makePromiseBoolean()
    return data
}

interface IObject {
    name: string,
    age: number,
}

const makePromiseObject = ():Promise<IObject> => {
  return  new Promise<IObject>((resolve , reject)=>{
    const data:IObject = {name:'ashraf' , age:2000}
    if(data){
        resolve(data)
    }
    else{
        reject('failed to fetch data')
    }
  })
}

const getPromiseObject = async ():Promise<object> => {
    const data = await makePromiseObject()
    return data
}