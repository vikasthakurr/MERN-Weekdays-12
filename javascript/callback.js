//call+back ==> invokation+later

// function mail(to, sub, body) {
//   console.log(
//     `mail has been sent to ${to} with subject ${sub} with body ${body}`
//   );
// }

// function mail(to) {
//   return function (sub) {
//     return function (body) {
//       console.log(
//         `mail has been sent to ${to} with sub ${sub} with body ${body}`
//       );
//     };
//   };
// }

// // mail("abc@gmail.com", "welcome to order");
// mail("ordered")("s24 ordered");

function sayHi(name, cb) {
  console.log(`hi ${name}`);
  cb();
}

function bye() {
  console.log("bye");
}

// sayHi("vikas", bye);
// sayHi("vikas");
// bye();

function makeMaggi(raw, cb) {
  console.log("start making maggi");
//   cb();
}
function waterBoil(cb) {
  console.log("water boiled");
  cb();
}
function finalStep(cb) {
  console.log("final step done maggi ready");
  cb();
}

makeMaggi("hakka", () => {
  waterBoil(() => {
    finalStep(() => {
      console.log("please eat maggi");
    });
  });
});
