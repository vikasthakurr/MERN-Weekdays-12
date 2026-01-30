// import http from "http";

// console.log(http);

// const PORT = 3000;
// const server = http.createServer((req, res) => {
//   //   console.log(req.method);
//   //   console.log(req.url);
//   //   console.log(req.headers);
//   //   res.statusCode = 404;
//   // console.log(res)
//   //   res.setHeader("MyName", "Vikas");
//   //   res.setHeader("Content-Type", "Html");
//   //   res.end("hello world");
//   if (req.url === "/") {
//     res.end("hello from home page");
//   } else if (req.url === "/about") {
//     res.end("hello from about page");
//   } else if (req.url === "/contact") {
//     res.end("hello from contact page");
//   }
// });

// server.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
// });

//server using express

import express from "express";
// console.log(express);

const server = express();
const PORT = 3000;

// server.get("/", (req, res) => {
//   res.send("hello from home page");
// });

server.get("/about", (req, res) => {
  res.send("hello from about page");
});

server.get("/signup", (req, res) => {
  res.send("hello from signup page");
});
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
