#### Type Intersection

- We already know about union types(|):
```ts 
let id: string | number;
```
- This means Id can either be a string or number.

**Intersection means AND (&)**
- Think of it like wee use extends in interface just like that we use &(intersection) for type.
```ts 
type Person = {
    name: string;
}
type Employee = {
    employeeId: number;
}

type EmployeeDetails = Person & Employee;
```
- This means EmployeeDetails must have everything from Person AND everything from Employee.
- so this is valid.
```ts
const employee: EmployeeDetails = {
    name: "tharun",
    employeeId: 1021
};

```

**Easy comparision**

- Union (|) choose one possibility.
- Intersection (&) choose both requirements.

```ts
type value: string | number;
```
- here value either string or number
```ts
type Employee = Person & Worker;
```
- Must satisfy both Person and worker.
- & combines types into one type that must satisfy all of them.