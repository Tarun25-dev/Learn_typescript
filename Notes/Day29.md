#### Type Guards

```ts
let value: string | number;
```
**Problem**
- If value could be either a string or number, Typescript won't let you blindly use methods that belongs to one type.
- So we need to check which type we actually have.

**typeof Type guard**
- it identifies the what type of value it is, so if we know that value then we only we can do that type belonging operations.

```ts
function print(value: string:number): void{
    if (typeof value === "string"){
        console.log(value.toUpperCase());
    }
    else{
        console.log(value.toFixed(2));
    }
}
```
- Here first typescript decides that value is string or number by typeof and then perform to their according operations.

**Why is this called a Type Guard?**
- Beacuse that condition, guards the code and tells typescript.

**Another Example**
```ts
function calculate(value: string | number): number{
    if (typeof value === "number"){
        return value*2;
    }
    return value.length;
};

calculate("Tharun");
calculate(23);
```