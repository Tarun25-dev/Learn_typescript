function e(): never{
    throw new Error("Something went wrong");
}
e()

//     throw new Error("Something went wrong");
//     ^

// Error: Something went wrong
//     at e (E:\python\P3\codes\d4\never.js:3:11)
//     at Object.<anonymous> (E:\python\P3\codes\d4\never.js:5:1)
//     at Module._compile (node:internal/modules/cjs/loader:1871:14)
//     at Object..js (node:internal/modules/cjs/loader:2002:10)
//     at Module.load (node:internal/modules/cjs/loader:1594:32)
//     at Module._load (node:internal/modules/cjs/loader:1396:12)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.18.1
