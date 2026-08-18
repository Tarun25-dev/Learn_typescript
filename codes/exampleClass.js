"use strict";
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
}
const newAccount = new BankAccount(100000);
newAccount.deposit(200000);
console.log(newAccount.balance);
