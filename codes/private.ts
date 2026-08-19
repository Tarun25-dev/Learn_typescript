class BankAccount{
    balance: number;

    constructor(balance: number){
        this.balance = balance;
    }

    showName(){
        console.log(this.balance);
    }
};

const newAccount = new BankAccount(100000);

newAccount.showName();

// newAccount.balance; error