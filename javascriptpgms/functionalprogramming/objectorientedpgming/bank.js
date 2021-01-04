class Bank{
    static bankName=()=>{
        console.log("sbk bank")
    }
    constructor(accno,names,balance){
        this.accno=accno;
        this.names=names;
        this.balance=balance;
    }
    withDraw=(amnt)=>{
        if(this.balance>=this.amnt){
            this.balance=this.balance-this.amnt;
            console.log("you account"+this.accno+"is debited by"+amnt+"available balance"+this.balance)
        }
        else{
            console.log("Insufficient balance");

        }
    }
    newDeposit=(amnt)=>{
        this.balance+=this.amnt;
        console.log("you account"+this.accno+"is credited by"+amnt+"available balance"+this.balance)
    }
    balanceEnq=()=>{
        console.log("your current balance:"+this.balance)
    }
}
let obj=new Bank(123456,"Ajay",1000);
obj.newDeposit(500);
obj.withDraw(250);
obj.balanceEnq();
Bank.bankName()