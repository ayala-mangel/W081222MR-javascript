/********* Class *********/
// התבנית הבסיסית ביותר
// class Mercedes {}

// function Mercedes() {
//   return {};
// }

// const arrow = () => {};

// console.dir(arrow);
// console.dir(Mercedes);

// const car = new Mercedes();
// const car2 = new Mercedes();
// const car3 = new Mercedes();

// console.log(Mercedes);
// console.log(car);

// הכנסת מפתחות וערכים למחלקה
// class User {
//   name = "David";
// }

// const user = new User();

// console.log(user);

// const user2 = new User();
// const user3 = new User();

// user.age = 43;

// console.log(user2);
// console.log(user3);

// קבלת ערכים של מפתחות במחלקה באמצעות הבנאי

// class User {
//   name;
//   age;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const user = new User("David Yakin", 43);
// const user2 = new User("Ayala Hason");

// console.log(user);
// console.log(user2);

// הכנסת מטודות לאובייקט הפרוטוטייפ בתוך המחלקה
// class Car {
//   /********** תכונות ***********/
//   _km = 0;
//   _fuelTank = 0;
//   _color;

//   /********** constructor ***********/
//   constructor(color = "black") {
//     this._color = color;
//   }

//   /********** methods ***********/
//   fuel(liters) {
//     if (
//       typeof liters !== "number" ||
//       liters <= 0 ||
//       liters + this._fuelTank > 50
//     )
//       throw new Error("Liters must be type number between 1-50");
//     this._fuelTank += liters;
//   }
// }

// const car = new Car();

// car.fuel("hallo");
// car.fuel(0);
// car.fuel(5);
// car.fuel(50);

// const car2 = new Car("yellow");

// console.log(car);
// console.log(car2);

// const obj = {
//   color: "black",
//   fuel() {},
// };

// console.log(obj);

// function Car() {
//   return {
//     color: "black",
//     fuel() {},
//   };
// }

// console.log(Car());

// function Car() {
//   return {
//     color: "black",
//     prototype: {
//       constructor: () => {},
//       fuel() {},
//     },
//   };
// }

// console.log(Car());

// console.dir(new Error("in error"));

// הכנסת משתנים סטאטיים למחלקה ושימוש בהם בתוך מטודות במחלקה
// class Car {
//   _km = 0;
//   _fuelTank = 0;
//   color;
//   static CONSUMPTION = 0.5;

//   constructor(color = "black") {
//     this.color = color;
//   }

//   fuel(liters) {
//     if (
//       typeof liters !== "number" ||
//       liters <= 0 ||
//       liters + this._fuelTank > 50
//     )
//       throw new Error("Liters must be type number between 1-50");
//     this._fuelTank += liters;
//   }

//   drive(km) {
//     const burnt = km * Car.CONSUMPTION; //_fuelTank = 5
//     if (typeof km !== "number" || km <= 0 || this._fuelTank - burnt < 0)
//       throw new Error("You can't drive, you run out of fuel!");

//     this._km += km;
//     this._fuelTank -= burnt;
//   }
// }
// Car.CONSUMPTION = 0;
// console.dir(Car);
// console.log(Car.CONSUMPTION);

// const car = new Car("red");
// car.fuel(10);
// car.drive(10);
// car.fuel(20);
// car.drive(20);

// console.log(car);

// car.fuel(40);
// car2.fuel(30);
// car3.fuel(20);

// car.drive(50);
// car2.drive(30);

// const cars = [car, car2, car3];

// cars.forEach(car => console.log(car));

// // ערכים פרטיים למחלקה
// class Car {
//   #km = 0;
//   test = false;
// }

// const car = new Car();
// car.test = true;
// car.#km = 100;
// console.log(car);

// הצגה ושינוי של משתנים פרטיים באמצעות מטודות
// class Car {
//   #km = 0;

//   get km() {
//     return this.#km;
//   }

//   set km(km) {
//     if (typeof km !== "number" || km <= 0)
//       throw new Error("km must be a number greater than zero!");

//     this.#km += km;
//   }
// }

// const car = new Car();
// car.km = 5;
// console.log(car.#km);
// console.log(car.km);
// console.log(car);

/********** Authorization with set **********/
// class Car {
//   color;
//   #km = 0;
//   #fuelTank = 0;
//   static CONSUMPTION = 0.5;

//   constructor(color = "black") {
//     if (typeof color !== "string") throw new Error("color must be a string");
//     this.color = color;
//   }

//   fuel(liters) {
//     if (
//       typeof liters !== "number" ||
//       liters <= 0 ||
//       liters + this.#fuelTank > 50
//     )
//       throw new Error("Liters must be type number between 1-50");
//     this.#fuelTank += liters;
//   }

//   drive(km) {
//     const burnt = km * Car.CONSUMPTION;
//     if (typeof km !== "number" || km <= 0 || this.#fuelTank - burnt < 0)
//       throw new Error("You can't drive, you run out of fuel!");

//     this.#km += km;
//     this.#fuelTank -= burnt;
//   }

//   get km() {
//     return this.#km;
//   }

//   get fuelTank() {
//     return this.#fuelTank;
//   }

//   set km({ fuel, isAdmin }) {
//     if (typeof isAdmin !== "boolean" || !isAdmin)
//       throw new Error("you must be user type admin to change km!");
//     if (typeof fuel !== "number" || fuel <= 0 || fuel + this.#fuelTank > 50)
//       throw new Error("fuel must be a number greater than zero!");
//     this.#fuelTank += fuel;
//   }
// }

// const car = new Car();
// car.fuel(10);
// car.drive(10);
// car.color = "red from goash!!!";
// console.log(car.fuelTank);
// car.km = { km: 5, isAdmin: false };
// car.km = { fuel: 40, isAdmin: true };

// console.log(car);
