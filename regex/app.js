// const string = "אבא הלך לעבודה לא יביא לי שום דבר";
// const string = "Hallo World!";
// const string = "Hallo Word!";
// const string = "Hao World!";
const string = "Word";

/********** Literal Regex **********/
// const regex = /l/g;
const regex = /\w+l.?/g;

/********** RegExp Regex Object **********/
// const regex = new RegExp("\\w+l.?", "g");

/********** RegExp Flags **********/
// בדיקה של הדגלים שהועברו לביטוי הרגולטורי

// const global = regex.global;
// const insenetive = regex.ignoreCase;
// const multiline = regex.multiline;

// console.log(global);
// console.log(insenetive);
// console.log(multiline);

/********** RegExp source **********/
// const s = regex.source;
// console.log(s);

/********** Regex.test(string) method **********/
// מחפש את הביטוי במחרוזת התווים ויחזיר ערך בוליאני
// const isExist = regex.test(string);
// console.log(isExist);

/********** String.match(regex) method **********/
//null מחזיר מערך כשכל איבר בו תואם את החיפוש הרגולטורי או שיחזיר
// const isMatch = string.match(regex);
// console.log(isMatch);

/********** String.search(regex) method **********/
// מחזירה את האינדקס של התשובה הראשונה שעונה על הביטוי הרגולטורי או -1
// const isSearch = string.search(regex);
// if (isSearch === -1) console.log("not found");
// console.log(isSearch);

/********** Regex.exec(string) method **********/
// null בודק את הביטוי הרגולטורי במחרוזת התווים ומחזיר מערך של התו הראשון שעומד בקריטריונים או
// const regex = new RegExp("l", "g");

// const isExec = regex.exec(string);

// console.log(regex);
// console.log(isExec);
// console.log(isExec[0]);
// console.log(isExec.length);
// console.log(isExec.index);
// console.log(isExec.input);
// console.log(isExec.groups);

// if (isExec) {
//   console.log("isExec");
// } else {
//   console.log("not isExec");
// }

// אם נרצה שהוא יראה לנו את כל המקומות בהם הוא מצא את הביטוי אצטרך להשתמש בלולאה
// for (let i = 0; i < 6; i++) {
//   console.log(i + 1);
//   console.log(regex.exec(string));
// }

// while ((result = regex.exec(string)) !== null) {
//   console.log(result);
// }

/********** String.replace(regex, replaceValue ) method **********/
// יחליף במחרוזת התווים את כל התווים שיענו לביטוי הרגולטורי שבארגומנט הראשון במה שנעביר לפונקציה בארגומנט השני
// const replacedRegex = string.replace(regex, "x");
// console.log(replacedRegex);

/********** String.split(regex) method **********/
// // יפצל את מחרוזת התווים לפי הביטוי הרגולטורי ויכניס למערך
// const isSplit = string.split(/\s/g);
// console.log(isSplit);

/********** Regex.toSting() method **********/
// הופך את הביטוי הרגולוטורי עצמו למחרוזת תווים
// הופך את הביטוי הרגולטורי למחרוזת תווים
// const regexString = regex.toString();
// console.log(regexString);

// const array = [1, 2, 3].toString();
// console.log(array);

// const array = [1, 2, 3].join(" ");
// console.log(array);
