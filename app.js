// Declaring a variable
// Keyword identifier/variable name

var firstName = "seth";
let lastName = "Abbey";
let age = 26;
let isMarried = true;  // Boolean
let children = ["Bright", "Simon", "Patric" ];  // Arrays
let other = {
    favoritecolor: "blue",
    favoritesport: "soccar",
    favoritefruit: "mango",
}
const fullName = firstName + " " + lastName;  // concatenation
const mySelf = `my name is ${firstName} ${lastName}.`;  // string interpolation
console.log(mySelf);

// // STRINGS
let sentence = "this is about Sabtec inc company"; //.lenght method
console.log(sentence.length);
console.log(sentence.split("Sabtec"));
console.log(sentence.replace("Sabtec", "patrick"));
console.log(sentence.toLowerCase());
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("Inc"));
console.log(sentence.includes("ther"));

// // ARRAY
let days = ["monday", "tuesday", "wonesday", "thursday",];
 console.log(days.length);
 days.push("friday"); // push is use to add a value whiles pop is used to take off the value
 console.log(days);
 console.log(days.pop());
  days.unshift("sunday");
  console.log(days);
  console.log(days.indexOf("friday"));
  console.log(days[5]);
  days[5] = "Sunday";
  console.log(days);
  // //OBJECT

 let person = {
    firstName: "Seth",
    lastName: "Abbey",
    age:27,
 };
 console.log(person.firstName);
 console.log(person["firstName"]);
 console.log(Object.keys[person]);
 console.log(Object.values[person]);
 console.log(Object.entries[person]);