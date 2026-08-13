#### Generic Arrays & Multiple Type parameters

- Previously we learned single generic:
```ts
function getValue<T>(value: T): T{
    return value;
};
```
**Generic arrays**

```ts 
function getFirst<T>(items: T): T{
    return items[0];
};

const number = getFirst([1,2,3,4,5]);
```

**Multiple generic types**

```ts
function combine<T, U>(a: T, b: U){
    return [a,b];
};

// T = type of a 
// U = type of b

const result = combine("Tharun",23);
```
- Here ts determines T = string and U = number
- Therefore the result is essentially [string, number]
- we can also give another combination type like `combine(10,20) or combine("tharun", true)`, etc.

**Why dont we write return type?**
- You noticed that in
```ts
function combiine<T, U>(a: T, b: U){
    return [a,b];
};
```
- we don't explicitly write the return type beacuse Typescript can infer it from the returned expression.
- If we want ro write then write like this:
```ts
function combiine<T, U>(a: T, b: U): [T, U]{
    return [a,b];
};
```

- Important: Use another generic when you need to represent another independently determined type.