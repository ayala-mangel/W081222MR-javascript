// const string = "אבא הלך לעבודה לא יביא לי שום דבר";
// const string = "Hallo World!";
// const string = "Hallo Word!";
// const string = "Hao World!";
const string = "Word";

/********** Literal Regex **********/
// const regex = /l/g;
const regex = /\w+l.?/g;

/********** RegExp Regex Object **********/
// const regex = new RegExp("l", "g");
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
