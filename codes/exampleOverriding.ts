class Payment{
    process(){
        console.log("Processing payment");
    }
}

class CreditCardPayment extends Payment{
    override process(){
        console.log("Processing credit card payment");
    }
}

class UPIPayments extends Payment{
    process(){
        console.log("Processing UPI Payment");
    }
}

const card = new CreditCardPayment();
const upi = new UPIPayments();

card.process();
upi.process();

// Processing credit card payment
// Processing UPI Payment