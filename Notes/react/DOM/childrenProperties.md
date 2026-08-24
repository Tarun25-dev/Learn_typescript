#### element.children

- children is a DOM property that gives you all the child HTML elements of an element.
```html
<div id="box">
    <h1>First</h1>
    <p>Second</p>
    <button>Third</button>
</div>
```
- Here div is the parent element for all inside are child elements for div element.
- If we need to access that first element in js we use property called element.firstElementChild.remove()
```js
const box = document.getElementById("box");

const firstElement = box.firstElementChild; // <h1>First</h1>
```
- What if we need to access children that not at first thats where children property comes in.
```js
const box = document,getElementById("box");

const SecondChild = box.children[1]; //  <p>Second</p>

box.children[2].remove() // it removes button element which is a third child for box
```