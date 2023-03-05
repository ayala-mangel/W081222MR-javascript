/***** new Date *****/
// const date = new Date();

// console.log(date);
// console.dir(date);
// console.log(typeof date);

/***** new Date constructor *****/

// const dateConstructor = new Date("1999", "11", "9", "12", "59", "24");

// console.log(dateConstructor);

/***** new Date methods *****/
// const date = new Date();

// const toLocalTimeString = date.toLocaleDateString();
// console.log(toLocalTimeString);

// const getFullYear = date.getFullYear();
// console.log(getFullYear);

// const getDate = date.getDate();
// console.log(getDate);

// console.log(Date);

// const time = date - dateConstructor;
// console.log(time);

const time = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliSeconds = date.getMilliseconds();

  return `${day}/${
    month + 1
  }/${year} ${hours}:${minutes}:${seconds}.${milliSeconds}`;
};

// const timeNew = time();

// console.log(timeNew);

/***** Date methods *****/
const date = Date.now();

console.log(date);
