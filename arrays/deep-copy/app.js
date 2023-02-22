/***** shallow copy in array *****/
// const array = ["one", "two", "three"];
// const second = array

// console.log(array);
// console.log(second);

// const arrayCopy = [...array];

// arrayCopy[0] = "Four";
// array[4] = "Four";

// console.log(arrayCopy);
// console.log(array);
// console.log(second);

/***** deep copy in array *****/
// const arrayOfObjects = [{key: "value"}]
// const secondArray = [...arrayOfObjects]

// arrayOfObjects[0].key = "david"

// console.log(arrayOfObjects);
// console.log(secondArray);

// העתקת מערך עם אובייקטים
// const array = [
//   { name: "David", age: 43 },
//   { name: "Rami", age: 27 },
//   { name: "Yosi", age: 22 },
// ];

// const arrayCopy = [{ ...array[0] }, { ...array[1] }, { ...array[2] }];

// array[0].name = "shula"

// console.log(array);
// console.log(arrayCopy);
