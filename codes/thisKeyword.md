#### this

- `this` is a keyword that refers to the object that is calling the method.
- The main use of `this` is to let a method access the data belonging to the object that is using that method.

```js
const user = {
    name: "Tharun",
    age: 23,

    introduce(){
        console.log(this.name);
        console.log(this.age);
    };
};

user.introduce();
```

- Suppose the method has a parameter with the same name as the object's property, in that situation `this` comes crucial.

```ts
const user = {
    name: "tharun",

    greet(name){
        console.log(this.name);
        console.log(name);
    }
};
```

- name is a local parameter 
- this.name is an object's property.
