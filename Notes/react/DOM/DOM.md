#### DOM(Document Object Model)

- The DOM is the browser-created object structure representing an HTML document.
- Suppose your HTML is:
```html
<!DOCTYPE html>
<html>
    <body>
        <h1>HELLO</h1>
        <p>Welcome</p>
    </body>
</html>
```
- When the browser loads this HTML, it creates a tree of objects:
```ts
Document
|___html
    |___body
        |_ h1
        |  |_ "HELLO"
        |_ p
           |_ "Welcome"
```
- This is called **the DOM tree**.

**Why does the browser creates the DOM?**
- Beacuse javascript needs a way to work with the webpage.
- The DOM provides Javascript with a way to access and manage the HTML document/content displayed in the browser.
- For example:
```html
<h1 id="title">Hello</h1>
```
- Javascript can access it through the DOM:
```js
const heading = document.getElementById("title");

heading.textContent = "Hello Tarun";
```
- So js will modify the header content Hello to Hello Tarun.
- The browser updates what you see on the webpage.

**FLOW**
```text
                    HTML file
                        |
                Browser loads it
                        |
            DOM is created in browsers memory
                        |
                Javascript can access it
                        |
                Browser renders the webpage
```

**Virtual DOM**
- The virtual DOM is a lightweight javascript representation of the UI that react uses to determine what needs to change in the real browser DOM.
- Similar way to work as browsers DOM, But we normally don't manipilate it directly otherhand in js we use **document**.
- In Plain Javascript, you might manually do:
```js
const title = document.getElementById("title");
title.textContent = "Hello Tarun"
```
- We are telling to the browser Find the DOM element and change its content.

- With React, we don't manually find and update the DOM.
```jsx
const [name, setName] = useState("Hello");
return <h1>{name}</h1>

setName("Hello Tarun");
```
- React internally handles the process of determining:
```text
    state changed
         |
    react renders the new UI
         |
    react determines what  changed
         |
    updates the necessary browser DOM
         | 
    browser displays it
```