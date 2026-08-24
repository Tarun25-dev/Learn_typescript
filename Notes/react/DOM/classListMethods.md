#### classList-Methods

- These are methods used to manage CSS classes on an HTML element.

**[1]. classList.add()**
- Adds a CSS class to an element.

```html
<button id="btn">Click</button>
```
```js
const button = document.getElementById("btn");

button.classList.add("active");
```
- Result:
- <button id="btn" class="active">Click</button>

**[2]. classList.remove()**
- Removes a CSS class from an element.
```js
button.classList.remove("active");
```
- result: 
- <button id="btn">Click</button>
- The active class is removed.


**[3]. classList.toggle()**
- Adds the class if it doesn't exist, and removes it if it already exists.

```html
<button id="btn">Toggle</button>

<p id="message">Hello!</p>
```
```js
const button = document.getElementById("btn");
const message = document.getElementById("message);

button.addEventListener("click",() => {
    message.classList.toggle("hidden");
});
```
- so can can access that in css when we click button.
```css
.hidden{
    display: none;
}
```

- We used this methods for:
- Dark/Light mode
- Open/Close menus
- Show/hide elements
- Active buttons
- Mobile navigation