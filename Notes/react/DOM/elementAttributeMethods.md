#### Element methods

**[1]. element.setAttribute("attribute", "value")**
- setAttribute() is a method used to add a new attribute or change an existing attribute of an HTML element.
```html
<img id="photo">
```
```js
const image = document.getElementById("photo");

image.setAttribute("src","photo.jpg");
image.setAttribute("alt","Profile Photo");
```
- Result: <img id="photo" src="photo.jpg" alt="Profile Photo">

**[2]. element.getAttribute("attribute")**
- getAttribute() is a method used to read the value of an attribute from HTML element.
```html
<img id="photo" src="photo.jpg" alt="Profile Photo">
```
```js
const image = document.getElementById("photo");

const source = image.getAttribute("src");
console.log(source); //photo.jpg
```