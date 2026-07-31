### History

**The birth of Javascript?**

In 1995, **Brendan Eich** created javascript at Netscape. He built the first version in just 10 days beacuse the web was growing very quickly.
- **Goal:** Make web pages interactive and Be easy for beginners to learn.

**The problem**

As websites grew larger, javascripts started showing its weaknesses. Imagine a project with 5,00,000+ lines of code and hunderds of developers and many files.

Common issues included:
- small mistakes causing runtime errors.
- Accidentally passing the wrong kind of data to functions.
- Refactoring code becoming risky.
- Bugs were difficult to trace.
Javascript wasn't designed for applications of that size.

**Microsoft's Challenge**

Around 2010, Microsoft was building large web applications like office online. Their developers wanted:

- Better error checking 
- Easier maintainance
- Better tools for large teams
- Improved code navigation and auto-completion

Instead of replacing javascript they decided to improve the development experience keeping javascript compatibility.

**Birth of Typescript**

In october 2012, Microsoft introduced TypeScript.
- The project was led by Anders **Hejlsberg** and his main idea was Keep everything love about javascript, but catch many mistakes before the program runs.

**Why didn't Microsoft create a completely new language?**

Beacuse javascript already powered the web and every browser understands javascript so, creating a new language would have required every browser to support it,which was unrealistic. So Microsoft made typescript compile into javascript.

```Typescript ---> Javascript ---> Browser```

**Note**
- Javascript was created to make web pages interactive.
- Typescript was created to make building larger applications safer and easier.
- Typescript doesn't compete with javascript, it helps developers write better javascript.
---
**Imagine a Builder**

Suppose a builder constructs a house without checking:
- if the walls are straight.
- if the doors fit 
- or if the roof is strong
The house may look fine at first, but problems appear later.

Javascript is similar: It lets you write code quickly but many mistakes are only found while the program is running.
Typescript checks for mistakes before you run the program.

**what is typescript?**

Typescript is a programming language developed by microsoft that adds static typing to javascript.

Typescript is built on top of javascript.

Every valid javascript program is also valid typescript. Typescript includes all the js features and add additional features like static typing, interfaces, enums, and more. Thats why it's called a **superset** of javascript.



**what is static typing**
think of a student age `Age = 22` and if we write `Age = "Hello"` javascript allows many mistakens like this until runtime, but typescript can detect these problems while yorur writing the code.

**How typescript works?**

You write typescript(.ts)
         🔽
typescript compiler(tsc)
         🔽
converts it to javascript
         🔽
Browser / Node.js executes javascript

**Javascript vs Typescript**

|Javascript|Typescript|
|----------|----------|
|Dynamically typed|Statically typed|
|Errors found later|many errors found|
|Easier to start|slight learning curve|
|Better for small scripts|Better for medium and large projects|
