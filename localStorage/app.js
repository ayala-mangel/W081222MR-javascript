/***** setItem string *****/
// localStorage.setItem("token", "bla");
// localStorage.setItem("token", '{"key":"value"}');

/***** JSON.stringify *****/
// const obj = { key: "value" };
// const objForLS = JSON.stringify(obj);
// console.log(typeof objForLS);
// localStorage.setItem("object", objForLS);

// const array = [1, 2, 3];
// const arrayForLS = JSON.stringify(array);
// localStorage.setItem("array", arrayForLS);

/***** setItem string *****/
// const obj = localStorage.getItem("object");
// console.log(obj);
// console.log(typeof obj);

// const objFromLS = JSON.parse(obj);
// console.log(objFromLS);
// console.log(typeof objFromLS);

/***** if getItem did not found this key *****/
// const array = localStorage.getItem("array");
// console.log(typeof array);

// if (!array) console.log("not found");
// else {
//   const arrayFromLS = JSON.parse(array); // הופך את מחרוזת התווים למערך
//   arrayFromLS.map(item => console.log(item));
// }

/***** removeItem  *****/
// localStorage.removeItem("user");

/***** clear  *****/
// localStorage.clear();

/***** will not work!!! *****/
// const { setItem } = localStorage;
// setItem("test", "hallo");

/***** exe *****/
// const users = [
//   { name: "david", age: "unknown" },
//   { name: "shalom", age: "45" },
//   { name: "jeff", age: "66" },
// ];

// const pictures = [
//   { url: "", alt: "" },
//   { url: "", alt: "" },
//   { url: "", alt: "" },
// ];

// const usersToLS = JSON.stringify(users);
// localStorage.setItem("users", usersToLS);

// const picsToLS = JSON.stringify(pictures);
// localStorage.setItem("pics", picsToLS);

// const getFromLC = localStorage.getItem("users");

// if (!getFromLC) console.log("users not found");
// else {
//   const usersFromLS = JSON.parse(getFromLC);
//   usersFromLS.map(user => console.log(user));

//   localStorage.removeItem("users");
//   localStorage.setItem("users-archive", getFromLC);
//   localStorage.clear();
// }
