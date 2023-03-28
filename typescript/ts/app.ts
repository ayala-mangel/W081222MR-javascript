/********** דוגמה לעבודה נכונה עם הספרייה **********/
// const FIRST_NUM = document.getElementById("first-num")! as HTMLInputElement;
// const SECOND_NUM = document.getElementById("second-num")! as HTMLInputElement;
// const BTN = document.getElementById("btn")! as HTMLButtonElement;
// const RESULT = document.getElementById("result")! as HTMLSpanElement;

// const sum = (firstNum: number, secondNum: number): number =>
//   firstNum + secondNum;

// const printNum = (firstNum: number, secondNum?: number): void => {
//   if (secondNum) {
//     const sumOnNum = sum(firstNum, secondNum);
//     RESULT.innerHTML = String(sumOnNum);
//     return;
//   }
//   RESULT.innerHTML = String(firstNum);
// };

// BTN.addEventListener("click", () =>
//   printNum(+FIRST_NUM.value, +SECOND_NUM.value)
// );

/********** קוד ללא טייפסקריפט **********/

// const FIRST_NUM = document.getElementById("first-num");
// const SECOND_NUM = document.getElementById("second-num");
// const BTN = document.getElementById("btn");
// const RESULT = document.getElementById("result");
// const sum = (firstNum, secondNum) => firstNum + secondNum;
// const printNum = (firstNum, secondNum) => {
//   if (secondNum) {
//     const sumOnNum = sum(firstNum, secondNum);
//     RESULT.innerHTML = String(sumOnNum);
//     return;
//   }
//   RESULT.innerHTML = String(firstNum);
// };
// BTN.addEventListener("click", () =>
//   printNum(+FIRST_NUM.value, +SECOND_NUM.value)
// );

/********** Literal Type **********/
// const literal: 12 = 12;

// const literal2: { name: "david" } = { name: "david" };
// literal3.age = 50;

// const literal3 = { name: "david" };

// const literal4: null = null;

// console.log(literal);

/********** Core Data Types **********/

// let any: any;
// any = "any";
// any = 0;
// any = true;
// any = {};
// any = [];

// console.log(any);

// let string: string = "I am a string!";
// string = "I am also a string"!;
// string = `Yep i am a string two!`;
// string = 5;

// console.log(string);

// let number: number = 5;
// number = 5.5;
// number = -5;
// number = 0;

// // console.log(number);

// let boolean: boolean = true;
// boolean = false;
// boolean = !!"hallo";
// boolean = Boolean(null);
// boolean = null

// console.log(boolean);

/********** Union Types **********/
// let union: string | number = "hallo";
// union = 5;

// console.log(union);

// const fn = (term: string | number) => {
//   if (typeof term !== "number") return console.log("NaN");
//   console.log("number");
// };

// fn("hallo");
// fn(5);
// fn({ name: "david" });

// console.log(typeof 5);
// console.log(typeof "hallo");
// console.log(typeof false);

// if (typeof "hallo" === "string") console.log("string");
