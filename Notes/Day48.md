#### ReturnType<T>

- ReturnType, It lets typescript extract the return type of a function.
- This is very useful when working with functions.

```ts
function getName(){
    return "Tharun";
};
```
- Typescript knows getName() --> string, So we can extract that type.
```ts
type Name = ReturnType<typeof getName>;

```
- Here Name --> string

**AnotherExample**
```ts
function getUser(){
    return {name: "tharun", age: 23};
};

type User = ReturnType<typeof getUser>;
```
- So here User becomes object type like this { name: string, age: number}
- So we didn't have to manually write the object type again.

**Why typeof?**

- typeof extract that type when the function returns.

**Why useful in real application?**

- Suppose a function already defines a complicated return structure:

```ts
function fetchUser(){
    return {
        id: 101,
        name: "tarun",
        active: true
    };
};

```
- instead of creating exact type like that function returns, we just need to use ReturnType.
```ts
type user = ReturnType<typeof fetchUser>;
```
- If the functions returns structure changes later then we also need to change there if we created manually.
- If we use ReturnType then it automatically follows the structure of that function's return.
