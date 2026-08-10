#### Optional and default parameters

```ts
function greet(name?: string): void{
    console.log(name);
};

greet();
greet("Tharun");
```
- This is optional parameter but default parameter is different.

**Default parameter**
- A default parameter is automatically used when the caller doesn't provide an argument.
```ts
function user(name: string = "Guest"): void {
    console.log("Welcome "+name);
};

user("Tharun"); // Welcome Tharun
user() // Welcome guest 
```
- Guest value acts as default value for name if the user forgot to give that argument or specifically not given argument then it acts as a argument so this restricts errors if any required argument is not mentioned.

**Optional VS default**

- Optional (?): value may be undefined.
- default: missing value gets a default value.