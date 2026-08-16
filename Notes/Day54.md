#### Type-safe function callbacks

**Function Type**
```ts
type Onsave = (name: string, age: number) => void;
```
- Onsave represents a function that: takes string, number and returns void.
- So:
```ts
const saveUser: Onsave = (name, age) => {
    console.log(name, age);
};

saveUser("tharun", 23);

```
**Why this matters for react?**
- React components frequently receive functions as props.
- For Example:
```ts
type ButtonProps = {
    text: string;
    onClick: () => void;
};

function Button({text, onClick}: ButtonProps){
    return (
        <button onClick={onClick}>{text}</button>
    );
};
```
- Here important code is onClick: () => void; 
- onClick must be a function that takes no arguments and returns nothing.

**Another Example**
```ts
type UserFormProps = {
    onSubmit: (name: string, age: number) => void;
};
```
- Now the component know exactly what function it is allowed to receive.
**callback Props**
```ts
type Props = {
    name: string;
    onSave: (name: string) => void;
};

function UserForm(props: Props){
    console.log(props.name);
    props.onSave(props.name);
};

UserForm({
    name: "tharun",
    onSave: (name) => {console.log("saving:",name)};
});

```
- Props is an object type which holds two properties name and onSave and name type is string and onSave inside refers function with one parameter called name and its return type is void.
- Observe here while calling UserForm we give two arguments.
- name which is string "tharun"
- onSave it is a function name is parameter and that parameter also name and then it reurns void.
- so we giving two parameters to UserForm one of that conatins function and that function calls inside when it wants here it is
- props.onSave(props.name)
