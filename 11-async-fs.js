const { log } = require("console");
const file = require("fs");
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
  });
});
