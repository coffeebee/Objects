const account = {
    name: "Alex",
    balance: 0,
    credit(val){
        this.balance += val;
    }, 
    describe(){
        return `owner: ${this.name}, balance: ${this.balance} `
    }
}
console.log(account.describe());

account.credit(170);
console.log(account.describe());