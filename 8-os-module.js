const os = require("os");
// console.log(os);

// info about user
// console.log(os.userInfo());

//method for uptime
// console.log(os.uptime());

const currentOS = {
  namee: os.type(),
  relese: os.release(),
};
console.log(currentOS.relese);
console.log(currentOS);
