function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }
  return inner;
}
let res = outer();
res();