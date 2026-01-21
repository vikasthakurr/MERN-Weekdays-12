// import figlet from "figlet";
// figlet("Hello Vikas", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// function sum(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// export default { sum, sub };

// sum(10, 20);
// export { sum };

import fs from "fs";
// console.log(fs);

//write operation
// fs.writeFileSync("./vikas.text", "hii vikas");
// fs.writeFileSync("abc.pdf","this is pdf")
// fs.appendFile("./vikas.text", "\n this is is updated content 2", (data, err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file created");
//   }
// });

fs.unlinkSync("./abc.pdf")