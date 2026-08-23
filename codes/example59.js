"use strict";
class Payment {
    receipt() {
        console.log("Receipr generator");
    }
}
class UPI extends Payment {
    pay(amount) {
        console.log(`Paid: ${amount} using UPI`);
    }
}
class Card extends Payment {
    pay(amount) {
        console.log(`Paid: ${amount} using Card`);
    }
}
const upi = new UPI();
const card = new Card();
upi.pay(1000);
card.pay(2000);
upi.receipt();
