/*********** Object by reference ***********/
// const obj = { key: "value" };
// const secondObj = obj;
// const thirdObj = secondObj

// secondObj.second = 2;
// thirdObj.key = "shalom"

// console.table(obj);
// console.table(secondObj);
// console.table(thirdObj);

/*********** Object by copy ***********/
// const obj = { key: "value" };
// const secondObj = {...obj}

// obj.third = false
// secondObj.second = 2;

// console.table(obj);
// console.table(secondObj);

/*********** Object in object ***********/
// const user = {
//   name: "david",
//   age: 42,
//   email: "david@gmail.com",
//   phone: "050-0000000",
//   address: {
//     city: "Jerusalem",
//     street: "aza",
//   },
// };

// console.table(user);

/***** object deep copy *****/
/***** first exe *****/
// const addressRef = {
//   city: "Jerusalem",
//   street: "aza",
// };

// const user = {
//   name: "david",
//   age: 42,
//   email: "david@gmail.com",
//   phone: "050-000000",
//   address: addressRef,
// };

// const second = {...user, address: {...addressRef}}

/***** second exe *****/
// console.log(user.address)
// console.log(second.address);
// console.log(addressRef);

// const address = {
//   city: "Jerusalem",
//   street: "aza",
// };

// const user = {
//   name: "david",
//   age: 42,
//   email: "david@gmail.com",
//   phone: "050-000000",
//   address: address,
// };

// const secondUser = { ...user, address: { ...user.address } };
// secondUser.address.city = "tel-aviv"

// console.log(secondUser);
// console.log(user);

/***** third exe *****/
// let user = {
//   name: "david",
//   age: 42,
//   email: "david@gmail.com",
//   phone: "050-0000000",
//   address: {
//     city: "Jerusalem",
//     street: "aza",
//   },
// };

// let userCopy = { ...user, address: { ...user.address } };
// userCopy.address.city = "tel aviv";

// console.table(user);
// console.table(userCopy);
