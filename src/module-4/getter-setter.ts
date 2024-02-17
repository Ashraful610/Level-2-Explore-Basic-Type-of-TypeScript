class BankAccount {
    readonly id:number;
    public name:string;
    private  _balance:number;
      constructor(id:number, name:string , balance:number){
          this.id = id;
          this.name = name;
          this._balance = balance;
      }
  
    //   getter
    get balance():number{
        return this._balance;
    }  

    // setter 
    set addBalance(amount:number){
      this._balance = this._balance + amount;
    }
    
  }
  
  const myAccount = new BankAccount(5 , 'Ashraf' , 5000)
  console.log(myAccount.balance)
  myAccount.addBalance  = 2000
  console.log(myAccount)