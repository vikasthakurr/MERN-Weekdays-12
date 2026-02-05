import express from "express";
import fs from "fs";
import { json } from "stream/consumers";
import multer from "multer";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const upload = multer({ dest: "uploads/" });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

//route

// app.use((req, res, next) => {
//     let username = "vikas";
//     let password = "1234";
//     let role = "admin";
//     if (
//         req.body.username === username &&
//         req.body.password === password &&
//         req.body.role === role
//     ) {
//         fs.writeFile("./user.text", JSON.stringify(req.body), (err) => {
//             if (err) {
//                 console.log(err);
//             }
//         });
//         next();
//     } else {
//         res.end("invalid credentials");
//     }
// });

// app.use((req, res, next) => {
//   console.log("middleware 2 called");
//   next();
// });

app.get("/", (req, res) => {
  res.end("hello from home page");
});

app.post("/user", (req, res) => {
  res.end("hello from user page");
});

app.post("/upload", upload.single("dp"), (req, res) => {
  res.status(201).send({ message: "media uploaded successfully" });
});

//todo
//create a route which can deal with multiple file at a time
app.post("/reg", (req, res) => {
  res.end("reg success");
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
