abstract class Payment{
    abstract pay(amount: number): void;

    receipt(){
        console.log("Receipr generator");
    }
}

class UPI extends Payment{
    pay(amount:number): void {
        console.log(`Paid: ${amount} using UPI`);
    }
}

class Card extends Payment{
    pay(amount: number): void {
        console.log(`Paid: ${amount} using Card`);
    }
}

const upi = new UPI();
const card = new Card();

upi.pay(1000);
card.pay(2000);

upi.receipt();

// Paid: 1000 using UPI
// Paid: 2000 using Card
// Receipr generator