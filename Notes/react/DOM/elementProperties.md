#### Element Properties

**[1]. element.textContent**
- textContent gets or changes the plain text inside an HTML element.
```html
<h1 id="title"></h1>
```
```js
const heading = document.getElementById("title");

heading.textContent = "Hello Tarun";
```
- Result:
```html
<h1 id="title">Hello Tarun"</h1>
```
- Remember It only changes text of an HTML element.

**[2]. element.innerHTML**
- innerHTML gets or changes the HTML content inside an element.
```html
<div id="box"></box>
```
```js
const box = document.getElementById("box");

box.innerHTML = "<h1> Hello Tharun </h1>";
```
- Result:
- <div id="box"><h1>Hello Tharun</h1></div>

**[3]. element.value**
- value gets or changes the current value of form elements such as <input>, <textarea>, <select>.
```html
<input id="name" type="text">
```
```js
const input = getElementById("name");

input.value = "Tharun";
```
- Now the input box contains Tharun 
- Same as also read what the user types:
```js
const inputValue = input.value;
console.log(name);
```
