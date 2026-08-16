#### Optional chaining ?

- **Optional Chaining** - Access this property only if the value before it exists, otherwise give me undefined instead of throwing an error.

**Without Optional chaining:**
```ts
const user = {
    name = "Tharun"
};

console.log(user.address.state);
```
- ERROR, beacuse address.state is doesn't exist.
- first js checks user.address exist then access or Throws an error and js never tries to access .state property.

**With Optional Chaining:**
```ts
const user = {
    name: "Tharun"
}

console.log(user.address?.city); //undefined
```
- first js checks user.address exist then access or keep its value as undefined and js never tries to access .city property.

**For Nested objects**
```ts
const user = {
    profile: {
        address:{
            city: "Nandyal"
        }
    }
};

console.log(user.profile?.address?.city)
```
- here if city is existed then no problem to profile and address otherwise it has been undefined.
- **?. safely accesses a property when the value might be null or undefined.
