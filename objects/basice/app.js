/**** let var const *****/
// var test = 5;
// test = "string";
// console.log(test)

// let test = 5;
// test = "string";
// console.log(test)

// const test = 3;
// test = "string";
// console.log(test);

/*********** שמות תקניים למפתחות באובייקט ***********/
// const obj = {
//   key: "value 1",
//   "key": "value 2",
//   Key: "value 3",
//   _: "value 4",
//   $: "value 5",
//   2: "value 6",
//   key2: "value 7"
// };

// const obj = {
//     "2key": "value",
//     "key!": 5,
//     "key test": false
// }

// console.log( obj);

/*********** שמות לא תקניים למפתחות באובייקט ***********/
// const obj = {
// 2key: "value",
// key!: "value",
// key test: "value",
// };

// console.log(obj);

/*********** סוגי ערכים באובייקט ***********/
// const obj = {
//   key: "string", // string
//   key2: 0, // number
//   key3: false, // boolean
//   key8: null, // null
//   key5: [], // array
//   key4: { key: "value 1" }, // object
//   key6: undefined, // undefined
//   key7: () => {}, // function,
// };

// console.log(obj);

/***********  undefined ***********/
// const obj = {}
// const obj = { key: undefined}
// const obj = { key: undefined, key: "one"}
// const obj = { key: "one"}
// obj.key = 5

// console.log(obj);

/***********  השמה - שינוי ערכים של מפתחות באוביקט ***********/
// const obj =  {key: "value" }
// obj.key  = "another value"
// obj["key"] = "some other value"
// obj["k" + "e" + "y"] = "final key"

// obj.key = obj.key + " bla bal"

// console.log(obj)

/*********** global objects ***********/
// console.log(typeof window)
// console.log(typeof document)

/***********  מחיקת מפתחות מאובייקט ***********/
// const obj =  {key: "value", second: 2}
// delete obj.key

// console.log(obj);

/*********** סוגי מפתחות באובייקט ***********/
// let key = "walla";

// const obj = {
// key: undefined,
// "key": "hallo",
// key : "value",
// "key 2" : 2,
// [key]: "value 3",
// walla : "aiza keta"
// ["key"]: "value 9"
// ["key 4"]: "value 4",
// ["key 5 " + key]: "value 5",
// [`one ${key}`]: "value 6",
// ["k" + "e" + "y"]: "value 7",
// [10 + 5] : "value 8",
// "15": "value 9",
// key: {name : "david"},
// [key] : {name: "david"},
// [12+3] : {"my name": "david"},
// [key] : ["my name", {text: "not my name"}],
// };

// console.log(obj["key 2"]);
// console.log(obj.walla);
// console.log(obj);

/*********** methods ***********/
// const key = "walla";

// const obj = {
//   fn() {},
// fn() {
//   return 5;
// },
// "fn" : function () {
//     return 5
// },
// fn : ()=>{}
// fn: function fn(){
//     return 5
// }
// "fn" : function () {
//     return {name: "david", age: 43}
// },
// "fn 2": function () { return "in fn Twoooo!!!!!!!!!!";},
//   [key](){
//       return {friends: [{name: "david", last: "yakin"}, {name: "yoda", last: "yakin"}]}
//   },
// [fn5](text) { return text;},
//   function: "value",
// };/

// console.log((obj.walla().friends[1].last = "mmosh"));
// console.log(obj.key())

/*********** אובייקטים עם מפתחות מספריים ***********/
// const obj = { 0: "one", 1: "two", 2: "three" };
// obj[3] = "four";

// console.log(obj);
// console.table(obj);

/*********** מערכים כאובייקטים ***********/

// const array = ["one", "two", "three"];
// array[3] = "four"; // עדיף להשתמש במטודות של מערכים ולא כך
// array.key = "value";
// array.fn = () => 5; // הכנסת מטודה למערך

// console.log(array.fn())

// array.unshift("blue");
// console.log(array);
// console.log(array[0]);

// array.shift();
// console.log(array);

// array.splice(1, 1);
// console.log(array);

// array.splice(1,1)
// console.log(array)
