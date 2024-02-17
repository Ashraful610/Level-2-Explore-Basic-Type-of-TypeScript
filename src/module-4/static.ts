class Counter {
   static  count : number = 0;

   static increment(){
   return  Counter.count += 1;
   }

   static dereament (){
    return Counter.count -= 1;
   }
}

console.log(Counter.increment());
console.log(Counter.increment());