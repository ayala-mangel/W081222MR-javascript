/********** סוגי מחרוזות תווים **********/
// let str = "";
// let str1 = '';
// let str2 = ``;+

/***** String ******/
// const term = false;
// console.log(typeof term);

// const text = String(term);
// const x = "false"

// console.log(typeof text);

// const obj = { key: "value" };
// const toString = String(obj);
// console.log(typeof toString);

/***** charAt(index) returns the character at the specified index *****/
// const text = "i am your father";
// const solution = text.charAt(0)
// console.log(solution);

/*****  replace("string", "stringToReplace") replaces a string with another string *****/
// const text = "i am your father";
// const solution = text.replace("father", "mother");
// const replaceFirst = text.replace(" ", "-");

// console.log(solution);
// console.log(replaceFirst);

/*****  split(.) converts the string to an array of strings *****/
// const text = "i am. your father";
// const split = text.split(" ");
// console.log(split);

/***** slice(start, end) returns a part of a string *****/
// const text = "abcdefghig";
// const text = "0123456789";
// const split = text.slice(3, 7);
// const split = text.slice(3);
// console.log(split);

/***** toLowerCase() returns the passed string in lower case *****/
// const text = "I Am Your Father";
// const lowerCase = text.toLowerCase();
// console.log(lowerCase);

/***** toUpperCase() returns the passed string in upper case *****/
// const text = "I am your father";
// const upperCase = text.toUpperCase();
// console.log(upperCase);

/***** trim() removes whitespace from the strings *****/
// const text = "     I am your father       ";
// console.log(text);

// const trimmed = text.trim();
// console.log(trimmed);

/***** string.includes("term") searches for a string and returns a position of a match ******/
// const text = "I am your father";
// const include = text.includes("your");
// console.log(include);

/***** string.indexOf("term") returns the index of the first occurrence of the specified substring *****/
// const text = "I am your father";
// const index = text.indexOf("your");
// console.log(index);

// const array = ["one", "two", "three"];
// const i = array.indexOf("two");
// console.log(i);

/***** toString convert an array to string *****/
// const array = ["i", "am", "your", "father", 53];
// const text = array.toString();
// console.log(text);

/***** copy sting to array *****/
// const text = "i am your father";
// const array = [...text];
// console.log(array);

// const term = "i haVe to tAke a dump";

// const makeEveryFirstLetterCapital = text => {
//   const splitText = text.split(" ");

//   for (let i = 0; i < splitText.length; i++) {
//     splitText[i] =
//       splitText[i].charAt(0).toUpperCase() +
//       splitText[i].slice(1).toLowerCase();
//   }

//   return splitText.join(" ");
// };

// const solution = makeEveryFirstLetterCapital(term);
// console.log(solution);

/********** match(regex) retrieves the result of matching a string against a regular expression **********/
/********** search(regex) searches for a string and returns a position of a match **********/
