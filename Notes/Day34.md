#### Generic constraints - extends

- We already learned generic type:
```ts
function getValue<T>(value: T): T{
    return value;
};
```
- T can be anything.
- But sometimes we want a generic while still restricting what types are allowed.
- That's where a generic constraints comes in.

**Problem**
- Suppose we want a function that gets the length of something:
```ts
function getLength<T>(value: T): number{
    return value.length;
};
```
- Typescript complaints beacuse T could be a number or boolean or string , etc.
- And those types don't necessarily have .length.

**Constrain T**
- We need to tell to ts **T must have a length property**.

```ts
function getLength<T extends {length: number}>(value: T): number{
    return value.length;
}

getLength("Tharun"); //Works
getLength([10,20,30,40]); //works
```
**What does extends mean here?**
`<T extends something>
- T is restricted to types that satisfy something.
- T can be many types but must satisfy the constraint.

**Example:**

```ts
function getId<T extends {id: number}>(obj: T): number{
    return obj.id;
};

getId({id: 100, name: "tharun"});
getId({id: 200, name: "kumar"});
 
```
- But we can't give without id like an obj has like this getId({name: "tharun}); then T cant satisfy constarint beacuse there is not id property.

- T can be anything
- T extends X
- T can vary but must satisfy X.
- This is very useful beacuse you get the flexibility of generics + type safety.

- `extends` puts a restriction/requirement on what T is allowed to be.
- `{length: number}` The whole type is called as **constraint.**