/***** throw *****/
// const solution = num => {
//     if (num < 0) throw "wrong number";
//     return num;
// };

// const test = solution(-1);

// console.log(test);

/***** new Error *****/
// const solution = num => {
//   if (num < 0) throw new Error("you are dumb!!!");
//   return num;
// };

// const test = solution(-1);

// console.log(test);

/***** try & catch *****/
// const solution = num => {
//   if (num < 0) throw new Error("you are dumb!!!");
//   return num;
// };

// try {
//   const test = solution(-1);
//   console.log(test);
// } catch {
//   console.dir("in catch");
// }

// const solution = num => {
//   if (num < 0) throw new Error("you are dumb!!!");
//   return num;
// };

// try {
//   const test = solution(-1);
//   console.log(test);
// } catch (error) {
//   console.dir(error.message);
// }

// const solution = num => {
//   if (num < 0) throw new Error("you are dumb!!!");
//   return num;
// };

// try {
//   const test = solution(1);
//   console.log(test);

//   const test1 = solution(-1);
//   console.log(test1);

//   const test3 = solution(2);
//   console.log(test3);
// } catch (error) {
//   console.dir(error.message);
// }

/***** invoking a function with try & catch *****/
// const solution = num => {
//   if (num < 0) throw new Error("you are dumb!!!");
//   return num;
// };

// const result = num => {
//   try {
//     const test = solution(num);
//     console.log(test);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// result(1);
// result(-1);
// result(2);
