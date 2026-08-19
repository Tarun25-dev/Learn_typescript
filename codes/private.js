"use strict";
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    showName() {
        console.log(this.balance);
    }
}
;
const newAccount = new BankAccount(100000);
newAccount.showName();
// newAccount.balance; error
