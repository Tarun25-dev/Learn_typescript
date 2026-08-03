##### Variables and Types

**Variable**

A variable is simply a named container that stores a value.

**Js variable:** `let age = 21;`

Javascript doesn't permanently remember that age should always be a number.

**Ts variable:** `let age: number = 21;`

Now typescript understands, this variable must always contain a number.

If you try: `age = "Twenty two";` then Ts immediately shows an error before your program runs. This is called **static type checking.**

**What is a Type?**

A type tells Typescript what kind of value a variable is allowed to store.

**Primitive Types**

[1.] **number:**

- EX: `let marks: number =95;`
- Allowed `marks = 100;`, it rewrites the value of marks to 100.
- Not-allowed `marks = "Hundred";`, beacuse we already decide that marks type as numbers so it will not allow any other type to rewrite.

[2.] **string:**

- Ex: `let name: string = "Tharun Kumar Kodiganti";`
- Allowed ` name = "THARUN KUMAR K";`
- Not-allowed `name = 25;`

[3.] **boolean:** Boolean has only two values true or false.

- EX: `let isLoggedIn: boolean = true;`

**Why does Typesvript care?**

- Imagine a banking application.
- Balance = 5000
- If someone accidentally writes
- Balance = "Five Thousand";
- The application could fail. Typescript catches that mistake before the application is deployed. That's why companies love it.

**Type Inference(One of Typescript best features)**

Type Inference means you don't declare the type. Typescript automatically determines it from the value you assign.

Instead of writing `let age: number = 22;`

You can simply write: `let age = 21;`

- Typescript is smart enough to infer(guess) that age is a number. This called Type inference.
- It saves you writing unnecessary type annotations while still giving you type safety.

**Explicit VS Inferred Types**

- **Explicit**: `let city: string = "Nandyal";`, You tell the Typescript the type.
- **Inferred**: `let city = "Nandyal";`, Typescript figures it out automatically at the compilation type.
- Both are valid in Ts.
