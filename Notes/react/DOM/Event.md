#### addEventListener

- element.addEventListener(event,function) is a DOM method used to listen for an event on a HTML element and run a function when that event happens.
```html
<button id="btn">Click Me</button>
```
```js
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    console.log("Button Clicked");
});
```

**Important Events**

- click = User clicks an element.
- dbclick = User double-clicks.
- input = User changes an input's value.
- change = input/select value is committed/changed.
- submit = A form is submitted.
- keydown = A keydoard key is pressed.
- focus = An element receives focus.
- blur = An element loses focus.