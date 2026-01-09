let obj1 = {
  fname: "vikas",
  age: 25,
  print: function () {
    console.log(this.fname, this.age);
  },
};
// obj1.print();
let obj2 = {
  fname: "akash",
  age: 20,
};

obj1.print(obj2);
