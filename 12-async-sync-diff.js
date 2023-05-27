const { log } = require("console");
const file = require("fs");
console.log("start");
file.readFile("./content/first.txt", "UTF-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(result);
  const one = result;
  file.readFile("./content/second.txt", "UTF-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    //   console.log(result);
    const second = result;
    console.log("x");
    file.writeFile(
      "./content/new.txt",
      `${one} ${second} is the result`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );
    console.log("not offloaded");
  });
});
console.log("offloaded");
// node offloads the tasks in async approach
