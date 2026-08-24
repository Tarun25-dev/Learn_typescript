#### Element creation and manipulation Methods

**[1]. document.createElement()**
- createElement is a DOM method used to create a new HTML element using javascript.
```js
const heading = document.createElement("h1");

heading.textContent = "Hello Tharun";
```
- Result: <h1>Hello Tharun</h1>
- But it is not yet added to the webpage.

**[2]. element.append()**
- append() is a DOM method used to add an element or content as the last child of another element.
```html
<div id="box"></div>
```
```js
const box = document.getElementById("box");

const heading = document.createElement("h1");

heading.textContent = "Hello Tharun";

box.append(heading);
```
- Result: <div id="box"><h1>Hello Tharun</h1></div>

**[3]. element.remove()**
- remove() is a DOM method used to remove an element from the DOM.
```html
<div id="box"><h1 id="heading">Hello Tharun</h1></div>
```
```js
const heading = document.getElementById("heading");

heading.remove();
```
