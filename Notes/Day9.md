#### Optional tuple elements

```ts
let user: [string,number] = ["Tharun",23];
```
- This requires two positions in the tuple.
- But sometimes a value may or may not exist so thats where an optional tuple element exists "?".
```ts
let user: [string,number?] = ["Tharun"];
```
- The ? means the second element is optional.
- Even we give two values is also valid like ["tarun",23]
- An optional tuple element must come after the required element. Ex:
- [string, number?], so here string is an must required element so it must keep at starting and then after optional will come.
- [string?, number], This is not allowed in ts beacuse it not comes after the required element.
