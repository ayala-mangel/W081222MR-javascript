import Validation from "./Validation.js";

// const { errors } = new Validation(5).string();
// const { errors, data } = new Validation("walla").number();
// const { errors, data } = Validation.validate(true).boolean();
// const { errors, data } = Validation.validate([]).object();
// const { errors, data } = Validation.validate({ key: "value" }).array();
// const { errors, data } = Validation.validate(" text ").trim();
// const { errors, data } = Validation.validate(" text@gmail.com ").email();
// const { errors, data } = Validation.validate("Aa1234!").password();
// const { errors, data } = Validation.validate("").required();
// const { errors, data } = Validation.validate("Aa1234!").regex(/a/g);
// const { errors, data } = Validation.validate("Aa1234!").min(2).max(12);

// if (errors.length) console.log(errors[0]);
// console.log(data);

/********** useForm **********/
// import useForm from "./useForm.js";

// const FORM_INIT = {
//   first: "",
//   second: "",
//   third: "",
//   fourth: "",
//   fifth: "",
//   sixth: "",
//   seventh: "",
//   eighth: "",
//   ninth: "",
//   tenth: "",
//   eleventh: "",
// };

// const SCHEMA = {
//   first: "string",
//   second: "object",
//   third: "boolean",
//   fourth: "number",
//   fifth: "array",
//   sixth: "email",
//   seventh: "password",
//   ninth: "required",
//   eighth: ["regex", /k/g],
//   tenth: ["min", 2],
//   eleventh: ["max", 3],
// };

// useForm(FORM_INIT, SCHEMA, console.table);

// const {
//   handleInputChange,
//   handleDisableSubmitBtn,
//   onSubmit,
//   errors,
//   handleReset,
// } = useForm(FORM_INIT, SCHEMA, console.table);

// handleInputChange({ target: { name: "first", value: "" } });
// handleInputChange({ target: { name: "first", value: "t" } });
// handleInputChange({ target: { name: "second", value: { key: "value" } } });
// handleInputChange({ target: { name: "third", value: true } });
// handleInputChange({ target: { name: "fourth", value: 1 } });
// handleInputChange({ target: { name: "fifth", value: ["one"] } });
// handleInputChange({ target: { name: "sixth", value: "test@gmail.com" } });
// handleInputChange({ target: { name: "seventh", value: "Aa1234!" } });
// handleInputChange({ target: { name: "eighth", value: "hhk" } });
// handleInputChange({ target: { name: "ninth", value: "req" } });
// handleInputChange({ target: { name: "tenth", value: "ss" } });
// handleInputChange({ target: { name: "eleventh", value: "bb" } });
// console.log(data);
// console.log(errors);
// const isFormValidate = handleDisableSubmitBtn();
// console.log(!!isFormValidate);
// if (!isFormValidate) onSubmit();

/********** Form Example **********/
import useForm from "./useForm.js";
export const EMAIL_FIELD = document.getElementById("email-field");
export const EMAIL_ERROR = document.getElementById("email-error");
export const PASSWORD_FIELD = document.getElementById("password-field");
export const PASSWORD_ERROR = document.getElementById("password-error");
export const CANCEL_BTN = document.getElementById("cancel");
export const SUBMIT_BTN = document.getElementById("submit");

// לניקוי שדות ושגיאות
const INPUTS_ARRAY = [EMAIL_FIELD, PASSWORD_FIELD];
const ERRORS_ARRAY = [EMAIL_ERROR, PASSWORD_ERROR];

// טופס ראשוני עם שמות כל השדות והערכים ריקים
const FORM_INIT = {
  email: "",
  password: "",
};

// סכמה שצורך ולידציה של המחלקה שאחראית על כל
const SCHEMA = {
  email: "email",
  password: "password",
};

// איפוס שדות הטופס והמשתנים הגלובליים והשגיאות
const onReset = (inputsArray, errorsArray) => {
  handleReset();
  inputsArray.map(input => {
    input.value = "";
  });
  errorsArray.map(err => {
    err.innerHTML = "";
  });
};

// פונקציה שתופעל עם שחרור כפתור שליחה
const handleSubmit = data => {
  console.table(data);
  onReset(INPUTS_ARRAY, ERRORS_ARRAY);
};

// מטודה שאחראית לניהול הטופס והשדות שבו והכפתורים
const { handleInputChange, onSubmit, handleDisableSubmitBtn, handleReset } =
  useForm(FORM_INIT, SCHEMA, handleSubmit);

// מטודה שאחראית לשינויים בשדות הטופס
const onInputChange = (e, errorEl) => {
  const { error } = handleInputChange(e);
  errorEl.innerHTML = error;
  const isFormValidate = handleDisableSubmitBtn();
  if (!isFormValidate) return SUBMIT_BTN.removeAttribute("disabled");
  SUBMIT_BTN.setAttribute("disabled", "disabled");
};

// האזנה לאירועים
EMAIL_FIELD.addEventListener("input", e => onInputChange(e, EMAIL_ERROR));
PASSWORD_FIELD.addEventListener("input", e => onInputChange(e, PASSWORD_ERROR));
SUBMIT_BTN.addEventListener("click", onSubmit);
CANCEL_BTN.addEventListener("click", () => onReset(INPUTS_ARRAY, ERRORS_ARRAY));
