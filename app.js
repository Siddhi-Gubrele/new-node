// sudo npm install -g <packageNmae>  // any project
// sudo npm install <packageNmae>  // local... can be used in this project only

// npm init, npm init -y

// node_modules is created by npm to store all dependencies

// package.json stores info about our project

const _ = require("lodash");
// console.log(_);
const arr = [1, [2, [3, [4]]]];
console.log(_.flattenDeep(arr));
console.log(arr);
