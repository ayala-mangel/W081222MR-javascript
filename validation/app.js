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
