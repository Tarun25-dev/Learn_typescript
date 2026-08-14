type User = {
    laptop1: number;
    laptop2: number;
    laptop3: number;
};

const LaptopPrices: Record<keyof User, number> = {
    laptop1: 30000,
    laptop2: 55000,
    laptop3: 42000
};

console.log(LaptopPrices);

// { laptop1: 30000, laptop2: 55000, laptop3: 42000 }