const Prices: Record<string, number> = {
    laptop: 100000,
    phone: 50000,
    tablet: 75000
};

console.log(Prices.laptop);
console.log(Prices["phone"]);
console.log(Prices.tablet);

console.log(Prices);

// 100000
// 50000
// 75000
// { laptop: 100000, phone: 50000, tablet: 75000 }
