#### Methods of DOM

**[1]. getElementById()**
- document.getElementById() is a DOM method used to find and access an HTML elemet using its unique id.
**Example:**
```html 
<h1 id="title"></h1>
```
```js
const heading = document.getElementById("title");
heading.textContent = "Hello Tarun";
```

**[2]. querySelector()**
- document.querySelector() is a DOM method used to find and access the first HTML element that matches a CSS selector.
```html
<h1 id="title">Hello</h1>
<p class="message">Welcome</p>
```
```js
const heading = document.querySelector("#title");
heading.textContent = "Hello Tharun";
```
- We also get that through class or direct element.
```js
document.querySelector(".message");

document.querySelector("h1");
```
- Remember querySelector() finds the first matching element.

**[3]. querySelectorAll()**
- document.querySelectorAll() is a DOM method used to find and access all HTML elements that match a CSS selector.
```html
<p class="message">Hello</p>
<p class="message">Welcome</p>
<p class="message">JS</p>
```
```js
const messages = document.querySelectorAll(".message");
console.log(messages);
```
- You can then work with them:
```js
messages.forEach((message) => {
    message.textContent = "Updated";
});
```
- So all p elements are changed to updated.
