// const ROOT = document.getElementById("root");

// console.log(typeof ROOT);

// ROOT.addEventListener("click", event => console.log(event));
// ROOT.addEventListener("click", console.log);

// ROOT.removeEventListener("click", console.log);
// ROOT.addEventListener("click", console.dir);

// const fn = (data, cb) => {
//   cb(data);
// };

// fn("notClick", e => console.log(e));

// fn({ type: "click", value: "x" }, console.log);

// fn("notClick", console.log);

// const test = e => console.log(e);

// test("data");

const INPUT = document.getElementById("input");

const onInput = ({ target }) => {
  const { name, value } = target;
  console.table({ [name]: value });
};

INPUT.addEventListener("input", onInput);
