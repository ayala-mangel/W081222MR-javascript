/*********** Functions recipe & activation **********/
// function fn() {
//   const num = 2 * 5;
//   console.log(num);
// }

// fn();

/*********** arrow functions **********/

// const fn = () => {
//   console.log("in arrow function");
// };

// fn();

/*********** Functions return **********/
// const fn = () => {}; // undefined

// const fn = () => {
//   return 5;
// };

// const fn = () => {
//   return "text";
// };

// const fn = () => {
//   return ["one"];
// };

// const fn = () => {
//   return null;
// };

// const fn = () => {
//   return false;
// };

// const fn = () => {
//   return { key: "value" };
// };

// console.log(fn);
// console.log(fn());

// const x = console.log(); // undefined
// console.log(x);

/*********** Shortcut for writing an arrow function **********/
// const fn = () => 5;

// console.log(fn());

/*********** Functions return stop code in code block **********/

// const fn = () => {
//   return 5;
//   console.log("in fn");
// };

// const log = fn(); // 5

// console.log(log);

/*********** Functions with parameters **********/
// const fn = (num) => num; // parameter

// const fn = num => {
//   return num;
// };

// const print = fn(5 + 5); // argument

// console.log(print);

// const fn = (num, shula) => {
//   return num + shula;
// };

// const fn = (num, shula) => {
//   return num + shula;
// };

// const print = fn(5, 9); // 14
// const print = fn("hallo ", "world"); //hallo world

// console.log(print);

/*********** Functions return only one thing **********/
/** early return **/

// const fn = (num) => {
//   if (typeof num !== "number") return "Please enter number";
//   if (num < 10) return "small";
//   if (num >= 10) return "big";
// };

// const print = fn(5);
// const print = fn("hallo"); //
// const print = fn(10);

// const print = fn();
// const print = fn(undefined);

// console.log(print);

// const fn = (num) => {
//   if (num < 10) return "small";
//   else return "big";
// };

// const fn = num => {
//   if (num < 10) return "small";
//   return "big";
// };

// const print = fn(10);

// console.log(print);

/*********** Functions not with early return **********/

// const fn = (num) => {
//   if (num < 10) console.log("num is smaller then 10");
//   if (typeof num === "number") console.log("num is a number");
//   return console.log("return");
// };

// fn(5);

/*********** Falsey and truethy **********/
// falsey;
// const emptyString = "";
// const x = null;
// const y = undefined;
// const zero = 0;
// const bool = false;

// truethy;
// const string = "not empty";
// const number = 5;
// const object = {};
// const array = [];
// const boolean = true;

// const log = (term) => {
//   if (!term) return console.log("falsey property");
//   console.log("truethy");
// };

// log(emptyString);
// log(x);
// log(y);
// log(zero);
// log(bool);

// log(string);
// log(number);
// log(object);
// log(array);
// log(boolean);

/*********** Functions that return object **********/
// const fn = () => {
//   return { key: "walla" };
// };

// const print = fn(); // { key: "walla" }

// console.log(print.key);

// const fn = () => {
//   return { key: "walla" };
// };

// const print = fn().key;

// console.log(print);

// const obj = { key: "value", second: 5 };
// obj.key = 5;

// console.log(obj);

/*********** Functions that call another function **********/

/*********** Callback functions **********/

// const fn = cb => {
//   if (typeof cb !== "function") return "not a function";
//   return cb();
// };

// const x = () => 5;

// // const print = fn(3);
// const print = fn(x);

// console.log(print);

// const secondFn = (text, cb) => {
//     console.log(text);
//   return cb(); // hallo
// };

// const x = secondFn("text", () => "hallo");

// console.log(x);

/*********** Self invoking function **********/

/*********** Function is object **********/

/*********** Passing event to functions **********/
