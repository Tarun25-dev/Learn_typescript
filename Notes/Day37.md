#### Generic Type Aliases

**Normal type alias**
```ts
type Box = {
    value: string;
};
```
- Then
```ts
const box: Box = {
    value: "HELLO"
};
```
- But if we want the same structure for different value types, we could create multiple aliases:
```ts
type StringBox = {
    value: string;
};

type NumberBox = {
    value: number;
};

type BooleanBox = {
    value: true;
};
```
- Thats process is repetative so instead of that we use type alias + generic then we can create that as reusable code with one type alias it can be any type that type will be decide while using that.

**Generic type alias**
```ts
type Box<T> = {
    value: T;
};

const stringBox: Box<string> = {
    value: "tharun"
};

const NumberBox: Box<number> = {
    value: 3225
};

```

**Generic type alias with arrays**
- We can also make a reusable array type:

```ts
type list<T> = T[];

const numbers: list<number> = [10,20,30,40];
const string: list<string> = ["a","b","c","d"];
```
- Here, list<numbers> = number[]
- list<string> = string[]

**Generic type alias with multiple types**
```ts
type Pair<T, U> = {
    first: T;
    second: U;
};

const data: Pait<string,number> = {
    first: "tharun",
    second: 3225
};
```

**Generic interface VS generic type alias**

- Interfaces are primarily designed for object structures and can be extended/merged.
- Type aliases are more flexible beacuse they can represent objects, unions, tuples, intersections, primitives, and more.
