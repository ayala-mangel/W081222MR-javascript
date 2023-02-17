/********** array methods **********/
/***** length *****/
// const array = ["one", "two", "three"];

// console.log(array.length);
// console.log(array);

/***** Sort *****/
// const array = [3, 1, 2];
// const array = ["a", "c", "b"];

// const sortedArray = array.sort();

// console.log(sortedArray);

/***** reverse *****/

// const array = ["a", "c", "b"];

// const newArray = [...array];
// const sortedArray = newArray.sort();
// const reverseArray = sortedArray.reverse();

// console.log(array);
// console.log(reverseArray);

// const sortArray = array => {
//   if (typeof array !== "object") return "Please enter an array!";
//   if (!array.length) return array;
//   const newArray = [...array];
//   const sortedArray = newArray.sort();
//   return sortedArray;
// };

// const sortAndReversedArray = array => {
//   if (typeof array !== "object") return "Please enter an array!";
//   if (!array.length) return array;
//   const newArray = [...array];
//   const sortedArray = newArray.sort();
//   const reverseArray = sortedArray.reverse();
//   return reverseArray;
// };

// const array = ["a", "c", "b"];

// const arrayFixed = sortArray(array);
// const arrayFixed = sortArray([]);

// console.log(arrayFixed);

// const arrayFixed = sortAndReversedArray(array);
// console.log(arrayFixed);

/***** push *****/
// const array = ["a", "c", "b"];
// array.push("d");

// console.log(array);

/***** unshift *****/
// const array = ["a", "c", "b"];
// array.unshift("d");

// console.log(array);

/***** pop *****/
// const array = ["a", "b", "c"];
// const newArray = [...array];
// const popItem = newArray.pop();

// newArray.unshift(popItem);

// console.log(array);
// console.log(newArray);
// console.log(popItem);

/***** shift *****/
// const array = ["a", "b", "c"];
// const newArray = [...array];
// const shiftItem = newArray.shift();
// newArray.push(shiftItem);

// console.log(array);
// console.log(shiftItem);
// console.log(newArray);

/***** find *****/
// const letters = ["a", "b", "c"];

// const findInArray = letters.find(letter => {
//   return letter === "c" || letter === "b";
// });

// console.log(findInArray);

// const users = [
//   { name: "david", age: 5 },
//   { name: "shula", age: 6 },
//   { name: "shula", age: 47 },
//   { name: "uri", age: 105 },
// ];

// const user = users.find(item => item.name === "shula");
// const user = users.find(item => item.name === "shula" && item.age === 6);

// users.find(user => {
//   console.log(user);
//   return user.name === "uri" && user.age === 105;
// });

// const user = users.find(function (item) {
//   return item.age === 105;
// });

// console.log(user);

/***** filter *****/
// const users = [
//     { name: "david", age: 5 },
//     { name: "shula", age: 6 },
//     { name: "shula", age: 47 },
//     { name: "uri", age: 105 },
// ];

// const filteredArray = users.filter(user => user.name === "shula");

// console.log(filteredArray);

/***** map *****/
// const numbers = [1, 2, 3];

// const mapArray = [...numbers.map(num => num * 2)];

// console.log(numbers);
// console.log(mapArray);

// const numbers = ["one", "two", "three"];

// [
//   ...numbers.map((item, index, array) => {
//     console.log(item, index, array);
//   }),
// ];
