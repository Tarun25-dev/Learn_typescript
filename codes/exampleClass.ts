class BankAccount{
    balance: number;

    constructor(balance: number){
        this.balance = balance;
    }

    deposit(amount: number){
        this.balance += amount;
    }
}

const newAccount = new BankAccount(100000);

newAccount.deposit(200000);

console.log(newAccount.balance);

// 300000