// fn1(fn2(fn3(50)));

// compose(fn1, fn2, fn3)(50); //Right to lext
// pipe(fn3, fn2, fn1)(50); //left to right

// const compose = (f, g) => (a) => f(g(a));
// const pipe = (f, g) => (a) => g(f(a));
// const multiplyBy3AndAbsolute = compose((num) => num * 3, Math.abs);
// console.log(multiplyBy3AndAbsolute(-50));

const sayHi = (name) => {
  return "Hello " + name;
};

const askHowAreYou = (data) => {
  return data + " , How are you ?";
};

const comFunc = (f, g) => (a) => f(g(a));

const newComFunc = comFunc(sayHi, askHowAreYou);

console.log(newComFunc("Hakan"));
