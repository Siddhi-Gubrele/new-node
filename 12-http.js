const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.end("this is home page!");
  }
  if (req.url === "/about") {
    res.end("this is about page!");
  }
  //   res.write("welcome to our main home page!!");
  res.end("hey");
});
server.listen(6969);
