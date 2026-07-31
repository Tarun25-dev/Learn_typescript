##### Setting up Typescript and Understanding the compiler

Browsers and Node.js don not understand Typescript, they only understand javascript so, We need a translator.

You write Typescript and the typescript compiler translates it into javascript.

**What is a compiler?**

A compiler is a program that converts source code from one programming language to another language that a computer can execute.

```text
Typescript (.ts)
 |
🔽
Typescript compiler (tsc)
 |
🔽
Javascript (.js)
 |
🔽
Browser / Node.js
```
- tcs = typescript compiler provided by microsoft
- tcs job is to:
- Read .ts file
- check for errors
- convert them into .js files.

**What is Node.js?**

Node.js is software that lets you run javascript outside a web browser. It also includes npm(Node Package Manager),which we use to install Typescript and many other development tools.

The tcs compiler installed through npm, and npm comes from Node.js.

**Code**
```ts
let message = "Hello! Typescript.";
console.log(message)
```
**To translate ts to js with static typing**
> tsc hello.ts
incase, any errors will occur then it shows immediately otherwise it converts  to js and in same directory it creates .js file auto then you can use that through html or through node

**Run hello.js**
> node hello.js