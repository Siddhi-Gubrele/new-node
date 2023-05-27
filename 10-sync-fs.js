const { readFileSync, writeFileSync } = require("fs");
const me = require("fs");
const t = me.readFileSync("./content/first.txt", "utf-8");
// console.log(readFileSync, writeFileSync);
// const first = readFileSync("./content/first.txt", "UTF-8");
// console.log(first);
// const second = readFileSync("./content/second.txt", "UTF-8");

// console.log(second);
// writeFileSync("./content/second.txt", "it's me", { flag: "a" }); // a helps to append, if flag is not used... file is overwritted.
// console.log(second);
// console.log(t);
