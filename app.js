// document.write({name: 'john'})
// alert({name: 'john'})
// console.log({name: 'john'});

// console.log("hello world");
// console.log("hello kossy");
// console.log("hello kelechi");
// console.log("hello Daddy");
// let name = "john shrimp taco VI";
// let address, zip, state
// address = "101 main street";
// zip = "10111"
// state = "lagos";
// name = 'chinelo';
// console.log(address, zip, state);
// console.log(name);

// console.log(name);
// let header_section ='random';
// console.log( header_section)
// =========-=====================================
// strings concatenation - combine strings values
// ''- bacticks (template strings) easier Option.
// =========-=====================================
// const name = 'john';
// const lastName = 'smilga';
// let fullName = name + ' ' + lastName;
// console.log('hello there your full name is :' + fullName );

// const website = 'google';
// const url = " https://www." + website + '.com'
// console.log(url);

// =========-=====================================
// numbers
// loosely typed = dont declare type
// =========-=====================================

// const number = 34/2
// const number2 = 3.47
// const number3 = '5.67'
// const add = number + number2
// const sub = number - number2
// const multi = number * number2
// const div = number + number3
// console.log(add);
// console.log(sub);
// console.log(multi);
// console.log(div);

// =========-=====================================
// numbers
// +=, -=, /=, *=, ++. --, %
// modullus(%) operator returns the remainder after integer division
// =========-=====================================

// let number = 40;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number -= 5;
// number++;
// number++;
// number++;
// number++;
// number--;
// number++;
// number /= 2;
// console.log(number);

// const slices = 10;
// const children = 3;
// const amount = slices % children;
// console.log(amount);

// const random = 4 + 6 + 10 * 10;
// const random2 = (4 + 6 + 10) * 10;
// console.log(random)
// console.log(random2)
// =========-=====================================
// implicit type conversion
// =========-=====================================
// simply saying when a string number is added to a none string number, strings concatenation happens. but when its muliplied divided etc, theres an implicit conversion i.e console log will ignore the strings and do the proper mathemathics

// =========-=====================================
// data types - 7 total
// primitive - String, number, booclean, null, undefined, Symbol
// objects - Array, functions, object
// =========-=====================================

// typeof -operator (typeof variable) (typeof value)

// String
// const text = "some text";

// // number
// const digit = 67;
// // booclean
// const value1 = true;
// const value2 = false;
// // null
// const result = null;

// // undefined
// let name;
// // Symbol(ES6)

// // console
// console.log(typeof text);
// console.log(text);
// console.log(typeof "some text");
// console.log(typeof 89);
// console.log(typeof false);
// console.log(typeof digit);
// console.log(typeof 77);
// console.log(typeof value1);
// console.log(typeof value2);
// console.log(typeof result);
// console.log( result);
// console.log(typeof name);

// ==============================================
//arrays Functions and objects
// arrays - [], 0 index based
// =========-=====================================
//ARRAYS
// const friend1 = "anna";
// const friend2 = "anna";
// const friend3 = "anna";
// const friend4 = "anna";
// // in a situation where your friends are up to 100 or more, instead of typing them all out you can make use of the array shortcut below
// const friends = ["john", "james", "joy", "suo", "amaka", "chizoba", "fish", 78, null, undefined, 'null'];
// console.log(friends [2]);
// // when using arrays you can reassign values to the index even when using CONST
// friends [2] = 'dozie';
// console.log(friends[2]);

//FUNCTIONS
// console.log('hello joy');
// console.log('hello anna');
// console.log('hello jessy');
// console.log('hello kossy');
// // extra codes.......
// console.log('hello joy');
// console.log('hello anna');
// console.log('hello jessy');
// console.log('hello kossy');
// extra codes.......
// console.log('hello joy');
// console.log('hello anna');
// console.log('hello jessy');
// console.log('hello kossy');
// extra codes.......
// in a case where you need to reuse a particular code, and you want to edit them and make correction or changes. instead of going through your possible 10000 lines of codes you can make use of functions instead
// function hello() {
//   // logic
//   console.log("hello joy");
//   console.log("hello anna");
//   console.log("hello jessy");
//   console.log("hello kossy");
// }
// hello();
// // xtra codes.....
// hello();
// // xtra codes.....
// hello();
// // xtra codes.....
// quiz #CHINELO-SOLUTION
// function hello1() {
//   // logic
//   console.log("hello joy");
// }
// function hello2() {
//   // logic
//   console.log("hello anna");
// }
// function hello3() {
//   // logic
//   console.log("hello jessy");
// }
// hello1();
// //greet joy
// hello2();
// //greet anna
// hello3();
//greet jessy

// quiz #JohnSmilga-SOLUTION
// example
// const name1 = "bob";
// const name2 = "kossy";
// const name3 = "chidera";

// function greet(name, second) {

//   console.log("hello there miss " + name);
//   console.log(second);
// }

// greet(name1 + ' tope', name2);
// // greet anna
// greet("JOY");
// // greet joy
// greet("jessy");
// // greet jessy

// =========-=====================================
//arrays Functions and objects
// return
// default undefined, shortcuts, ignores after
// 1 inch 2.54cm
// =========-=====================================

// function calculate(value) {
//   const newValue = value * 2.54;
//   // console.log("the value in cm is : "+ value * 2.54 + "cm");
//   // return newValue;
//   return value * 2.54;
//   console.log('hello world');
//   //  anything placed after a return in a function by default wont show in te console log
// }
// calculate(3)
// // when console.log("the value in cm is : "+ value * 2.54 + "cm"); was commented out in the function. 'calculate(3)' was invoke but did not show in the console log
// const wallHeight = 80;

// const width = calculate(100);
// const random = calculate(10);
// const height = calculate(wallHeight);
// const dimension = [width, height, random];
// console.log(dimension);

// =========-=====================================
//arrays Functions and objects
// expression - another way to define a function
//create a varriable, assign to FUNCTION (not value), use VAR
// =========-=====================================

// function definition/declaration
// function addValues(num1, num2) {
//   return num1 + num2;
// }
// const firstValue = addValues(3, 4);
// const secondValue = addValues(12, 34);

// // function expression
// const add = function addValues(num1, num2) {
//   return num1 + num2;
// };

// // this is also known as annonymous fumction because it has no variable/ reference name
// const sub = function (num1, num2) {
//   return num1 - num2;
// };

// // or you can also invoke the fuction expression like... sub(6, 4)
// const thirdValue = add(3, 9);
// const values = [firstValue, secondValue, thirdValue, sub(6, 4)];
// console.log(values);
// console.log(add(10, 6));

// //arrow function => means return
// const multiply = (num1, num2) => num1 * num2;
// console.log(multiply(10, 6));

// ===============================================
//arrays Functions and objects
// object - key/value pairs methods
// dot notation
// =========-=====================================
// ANEXAMPLE OF OBJECTS
// const person = {
//   name: "john",
//   lastName: "peters",
//   age: 40,
//   education: false,
//   married: true,
//   siblings: ["anna", "joy", "favour"],
//   greetings: function () {
//     console.log("hello my name is john");
//   },
// };
// console.log(person.age);
// person.age = 25;
// console.log(person.age);
// person.name = 'chinelo';
// console.log(person.name);
// console.log(person.siblings[1]);
// person.greetings();

// ===============================================
//conditional statements
// >, <, >=, <=, ==, ===, !=, !==
// else if and !
// =========-=====================================

// if (true) {
//   console.log("hello world");
// }
// if (2 < 1) {
//   console.log("hello hello");
// } else {
//   console.log("hello people");
// }
// const value = true;
// if (value) {
//   console.log("hello yemi");
// }
// const value2 = false;
// if (value2) {
//   console.log("hello ayo");
// }else {
//   console.log("hello family");
// }

// ===============================================
// else if
// =========-=====================================
// const num1 = 6;
// const num2 = 6;
// const result = num1 <= num2;
// const result2 = num1 >= num2;
// if (num1 > num2) {
//   console.log("first number is bigger than second");
// } else if (result) {
//   console.log("second number is bigger than first");
// } else if (result2) {
//   console.log("second first");
// } else {
//   console.log("second number is bigger than first");
// }
// console.log(typeof result2)

// ===============================================
//conditional statements
// >, <, >=, <=, ==, ===, !=, !==
//comparison operators
// !
// ================================================

// const value = false;
// if (!value) {
//   console.log("value is here");
// }
// the exclamation mark means not or opposite

// ===============================================
//conditional statements
// >, <, >=, <=, ==, ===, !=, !==
//comparison operators
// == checks only value
// == checks value and type
// =========-=====================================

// const num1 = 6;
// const num2 = 6;
// const value = num1 == num2;
// const value2 = num1 === num2;
// console.log(value);
// console.log(value2);

// const num3 = 8;
// const num4 = "18";
// const value3 = num3 == num4;
// const value4 = num3 === num4;
// console.log(value3);
// console.log(value4);

// const value5 = num3 != num4;
// const value6 = num3 !== num4;
// console.log(value5);
// console.log(value6);

// ===============================================
// logical operators
// (|| - OR), (&& - AND), !
// =========-=====================================

// const name = "Angela";
// const age = 24

//     // || or examle

// if (name === 'solo' || age === 24) {
//   console.log("hello there");
// }else {
//     console.log('wrong values')
// }
//      // && and examle

// if (name === 'solo' && age === 24) {
//     console.log("hello people");
//   }else {
//       console.log('HELLO HELLO')
//   }

//       // ! examle

//   if (name !== 'solo' && age === 24) {
//     console.log("hello people");
//   }else {
//       console.log('HELLO HELLO')
//   }

//================================================
// switch
// dice values : 1 - 6
//==========-=====================================

//ALL IF
// const dice = 0;
// if (dice === 1) {
//   console.log("you got one");
// }
// if (dice === 2) {
//   console.log("you got two");
// }
// if (dice < 1 || dice > 1) {
//   console.log("you got none");
// }

//ELSE IF

// const dice = 1;
// if (dice === 1) {
//   console.log("you got one");
// } else if (dice === 2) {
//   console.log("you got two");
// } else {
//   console.log("you got none");
// }

//   SWITCH

// const dice = 39;
// switch (dice) {
//   case 1:
//     console.log("you got one");
//     break;
//   case 2:
//     console.log("you got two");
//     break;
//   case 3:
//     console.log("you got three");
//     break;
//   default:
//     console.log("you did not roll the dice");
// }

//================================================
// loops
// repeatedly run a block of code while condition is true
//while loop
//turn off autosave
//==========-=====================================
// const amount = 10;
// while (amount > 0) {
//   console.log("i have " + amount + "dollar and i'm going to the mall");
//   amount--;
// }
// FOR LOOPS WE USE LET INSTEAD OF CONST CAUSE LOOPS ARE MEANT TO BE CHANGING CONSTANTLY AND CONST DONT ACCEPT CHANGES

// let amount = 10;
// while (amount > 2) {
//   console.log("i have " + amount + " dollars and i'm going to the mall");
//   amount--;
// }

//================================================
// loops
// repeatedly run a block of code while condition is true
//do while loop
//code  block first, condition second
//runs at least
//==========-=====================================
//
// let money = 0
// do {
//     console.log('you have ' + money + " dollars");
//     money++
// } while(money < 10);

//         FOR LOOP

// let i;
// for (i = 0; i < 10; i++) {
//   console.log("and the number is: " + i);
// }

// let j;
// for (j = 10; j < 18; j++) {
//   console.log("and the digit is: " + j);
// }

// for (let number=11; number >=0; number--){
//     console.log('the number is : ' + number);
// }

//================================================
// strings property and method
// wrapper strings object
//==========-=====================================
//
// let text = "peter jordan";
// const person = {
//   name: "peter",
//   greeting() {
//     console.log("hey i'm peter");
//   },
// };

// console.log(person);
// console.log(person.name);
// person.greeting();

// let text = " PETEEEr Jordanhhhhhhhhd";
// let result = text.length;
// console.log(result);
// console.log(text.length);
// console.log(text.toLocaleLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(9));
// console.log(text.charAt(text.length));
// console.log(text.charAt(text.length - 2));
// console.log(text.indexOf("p"));
// // -1 means small letter p is not in "PETER Jordanhhhhhhhhd"; as javscript is case sentitive
// console.log(text.indexOf("h"));
// console.log(text.indexOf("R"));
// console.log(text);
// console.log(text.trim());
// console.log(text.trim().toUpperCase().startsWith("PETEEER"));
// console.log(text.trim().toLowerCase().startsWith("peteeer"));
// console.log(text.includes("ETEEEr"));
// console.log(text.toLocaleLowerCase().includes("eteeer"));
// console.log(text.slice(0, 4))
// console.log(text.slice(4))
// console.log(text.slice(0, -2))
// console.log(text.slice(-5))

//================================================
// template literals - ES6
//backticks characters `` - above tab (left from)
//interpolation ${} - insert expression(value)
//=========-=====================================
//          ES6

// const name = "john";
// const age = 25;
// const sentence = "hey it's " + name + " and he is " + age + " years old";

// console.log(sentence);

// //USING INTERPOLATION=${} INSTEAD OF STRING CONCATINATION TO MAKE A SENTENCE
// const value=`hey its me again ${name} and i'm ${age} years old and here's a simple math:   ${5 * 2}`
// console.log(value);

//===============================================
//arrays properties and methods
//=========-=====================================
// let names = ["Amake", "chinelo", "joy", "anna"];
// //      LENGTH
// console.log(names.length);
// console.log(names[3]);
// console.log(names[names.length - 2]);

// // CONCAT
// const lastNames = ["james", "Egbunine", "Emeje", "obiorah"];
// const allNames = names.concat(lastNames);
// console.log(allNames);
// // reverse
// console.log(allNames.reverse());
// // unshift adding the parameters to the front
// allNames.unshift("suzy");
// allNames.unshift("chinedu");
// console.log(allNames);
// // shift- minusing from the front
// allNames.shift();
// allNames.shift();
// allNames.shift();
// allNames.shift();
// console.log(allNames);
// // push- adding the parameters to the back
// allNames.push("emeka");
// allNames.push("terry");
// console.log(allNames);
// //   pop minusing from the back
// allNames.pop();
// allNames.pop();
// allNames.pop();
// console.log(allNames);
// //splice- it mutates the original arrays video duration 4:44:55
// const specificNames = allNames.splice(2, 1);
// console.log(specificNames);

//===============================================
//arrays and for loops
//=========-=====================================
// const names = ["anna", "joy", "james", "kelly"];
// const lastName = ["Banana"];
// let newArray = [];
// //     FOR LOOP ----incase ya confuse duration 4:53:25
// for (let i = 0; i <= names.length - 1; i++) {
//   console.log(i);
//   console.log(names[i]);
//   newArray.unshift(`${names[i]} ${lastName}`);
//   newArray.push(`${names[i]} ${lastName}`);
// }
// console.log(newArray);

//  FUNCTIONS, ARRAYS, IF, ARRAYS, FOR LOOP

// const gas = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function totalExpenses(arr) {
//   let total = 0
//   for (i = 0; i < arr.length; i++) {
//     console.log(arr)
//   }
// }
// totalExpenses(gas)

// function totalExpenses(arr) {
//   let total = 0
//   for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//   }
// }
// totalExpenses(gas)

// function totalExpenses(arr) {
//   let total = 0
//   for (i = 0; i < arr.length; i++) {
//     total += arr[i]
//   }
//   console.log(total)
// }
// totalExpenses(gas)

// function totalExpenses(arr) {
//   let total = 0;
//   for (i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// const gasExpenses = totalExpenses(gas);
// const foodExpenses = totalExpenses(food);
// const randomExpenses = totalExpenses([10, 10, 10, 1]);

// console.log({
//   chop_food: gasExpenses,
//   fuel_gas: foodExpenses,
//   num_random: randomExpenses,
// });

//  video duration 5:09:01

// function totalExpenses(arr) {
//   let total = 0;
//   for (i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   if (total > 100) {
//     console.log('whoa you are spending too much!');
//     return total;
//   }
//   console.log('you are good to go');

//   return total;
// }
// const gasExpenses = totalExpenses(gas);
// const foodExpenses = totalExpenses(food);
// const randomExpenses = totalExpenses([10, 10, 10, 1]);

// console.log({
//   chop_food: gasExpenses,
//   fuel_gas: foodExpenses,
//   num_random: randomExpenses,
// });

// =========-=====================================
// reference vs value
// primtive data type are below (6)
// string, number, symbol, booclean, undefined, null
//arrays functions object= Non-primitive
// typeof
// =========-=====================================

// WHEN ASSIGNING PRIMINTIVE DATS TYPE TO A VARIABLR ANY CHANGES ARE MADE DIRECTLY TO THAT VALUE, WITHOU AFFECTING ORIGINAL VALUE

// const number = 1;
// let number2 = number;
// console.log(`the first value is ${number}`);
// console.log(`the second value is ${number2}`);

// WHEN ASSIGNING NON PRIMITIVE DATA TYPE VALUE TO A VARIABLE If DONE BY REFERENCE SO ANY CHANGES WILL AFFECT ALL THE REFERENCE
// let person = { name: 'bob' };
// let person2 = { ...person };
// person2.name = 'james';

// console.log(`the name of the first person is ${person.name}`);
// console.log(`the name of the first person is ${person2.name}`);

// NULL AND UNDEFINED: both represents "no values"
//UNDEFINED: it means javascript cannot find a value
//         SITUATIONS LIKE
// variable withoout value
//missing functions arguments
// missing objects properties

// null: for null most cases developers sets no value

// =========-=====================================
//truthy and falsy
// TRUTHY VALUES CAN BE ANYTHING
// EXAMPLES OF FALSY VALUES ARE: "", '', ``, 0, -0, NaN, null, undefined
// =========-=====================================
// const bool1 = true;
// const bool2 = 2 > 1;
// if (true) {
//   console.log(`hey it works `);
// }
// if (2 > 1) {
//   console.log(`hey it also  works `);
// }

// const text = 'fe';
// if (text) {
//   console.log('hey the value is truhy');
// } else {
//   console.log('hey the value is falsy');
// }

// const text2 = '';
// if (text2) {
//   console.log('hey the value is truhy');
// } else {
//   console.log('hey the value is falsy');
// }

// =========-=====================================
//unary operator - typof
// let text = 'some text';
// console.log(typeof text);

// //BINARY OPERATOR - assignment
// let digit = 4;
// let digit2 = 40 + 1;

// // TERNARY OPERATOR
// condition ? (run if true) : ( run if false)
// =========-=====================================

// const value = 1 > 0;
// value ? console.log('value is true') : console.log('value is false');

// if (value) {
//   console.log('value is true');
// } else {
//   console.log('value is false');
// }

// =========-=====================================
// Global scope vs local scope
// any variable outside code block {} is said to be in global scope
// can be access anywhere in the program
//you hane to watch out for: NAME COLLISIONS AND MODIFY BY MISTAKE
//
// =========-=====================================

// NAME COLLISION: means giving different variables same name e.g
//  let name = 'chinelo'
//  name='tracy'
//  const name ='jessy'
//  // this is an example of variable name collision

// MODIFY BY MISTAKE
// let name = 'chinelo';
// name = 'tracy';

// function calculate() {
//   console.log(name);
//   name = 'orange';
// }
// if (true) {
//   console.log(name);
//   name = 'pants';
// }
// calculate();
// console.log(`my name is ${name} and i'm awesome`);

// =========-=====================================
// local scope cant be accessed from outside code blocks
// =========-=====================================

// const name = 'chinelo';

// function calculate() {
//   const name = 'jessy';
//   console.log(name);
// }
// if (true) {
// }
// calculate();
// console.log(`my name is ${name} and i'm awesome`);
// BOTTOM LINE IS WHATEVER VARIABLES OR DATA INSIDED HE CURLY BRACKET{} CANNOT BE ACCESSED,CHANGED OR MODIDIFY OUTSIDE THHE BRACKETS IT HAS TO BE WITHIN THE BRACKETS
// AND WHEN YOU DONT USE KEYWORDS LIKE: VAR, LET, CONST, FOR A VARIABLE IT CAN BE ACCESSED OUTSIDE THE CURY BRACKETS
// {
//   // curly bracket can be a regular code block
//   const special = 553;
//   console.log(special);
// }
// console.log(special);

// function calculate() {
//   const name = 'jessy';
//   const age = 34;
//   // more codes
//   random = 'random random';
// }
// calculate();
// console.log(random);

// ===============================================
// variable lookup
// {} - code block
// =========-=====================================

// const globalV = 5;
// function add(num1, num2) {
//   const globalV = 5;

//   const result = num1 + num2 + globalV;
//   function multiply() {
//     const multiplyResult = result * globalV;
//     console.log(multiplyResult);
//   }
//   multiply();

//   return result;
// }

// add(3, 4);
// console.log(add(1, 1));

// const globalV = 5;
// function add(num1, num2) {
//   const globalV = 10;
//   const result = num1 + num2 + globalV;
//   function multiply() {
//     const globalV = 100;
//     const multiplyResult = result * globalV;
//     console.log(multiplyResult);
//   }
//   multiply();

//   return result;
// }

// console.log(add(1, 1));

//  MY MINI EXPERIMENT

// function add() {
//   const random = 19;
//   const glo = 50;
//   const result = random + glo;
//   console.log(result);
// }
// console.log(add());

// ===============================================
// callback functions, higher order functions, functions as first class objects/citizens

// functions are first class objects - stored in a variable (expresion), passed as an argument to another function, return from the function (closure)

// higher order function - accepts another function as an arguments or returns another functions as a result

// calblack functions - passed to another function as an argument and executed inside the function
// ===============================================
//  MAKE IT MAKE SENSE
// function num(num1, num2) {
//   return num1 + num2;
// }
// num(5, 6);

// function greetings(name) {
//   const myName = 'chinelo';
//   console.log(`good morning ${name} my name is ${myName}`);
// }
// greetings(`sam`);

// //    EXMPLE OF CALL BACK FUNCTIONS
// function morning() {
//   console.log('Good morning Bob');
//   return 'Good morning Bob';
// }
// //    HIGHER ORDER CLASS FUNCTION
// function greeting(name, cb) {
//   cb();
//   const myName = 'jessy';
//   console.log(`${name}, myname is ${myName}`);
// }
// greeting('solomon', morning);
// greeting('charles', morning);

// //    EXMPLE 2 OF CALL BACK FUNCTIONS
// function morning(random) {
//   return `Good morning ${random.toUpperCase()}`;
// }
// //    HIGHER ORDER CLASS FUNCTION
// function greeting(name, cb) {
//   const myName = 'jessy';
//   console.log(`${cb('anna')}, myname is ${myName}`);
// }
// greeting('solomon', morning);
// greeting('charles', morning);

// // MY CALL BACK EXAMPLE

// //  call back function
// function greetings(name) {
//   return `good morning ${name}`;
// }
// function afternoon(name) {
//   return `good afternoon ${name}`;
// }

// // higher order function
// function greet(name, cb) {
//   const myName = 'chinelo';
//   console.log(`${cb(name)}, my name is ${myName}`);
// }
// greet('solomon', greetings);
// greet('charles', afternoon);

// ===============================================
// powerful array methods
// foreach, map, filter, find, reduce
// iterate over array - no for loop required
//Accept callback function as an argument, calla callback agaianst each  item in a array. Reference item in the callback parameter.
// ===============================================

// const numbers = [0, 1, 2, 3, 4];
// // show all numbers

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
// ];
// //  FOREACH FUNCTION EXAMPLE
// function showPerson(person) {
//   console.log(person.position.toUpperCase());
// }

// people.forEach(showPerson);
// // you can also pass in a call back function directly, using a annonymous function

// people.forEach(function (item) {
//   console.log(item.age);
// });

//  MAP FUNCTION EXAMPLE  duration 6:05:12
// characteristics of map function
// it returns a new array
// does not change size of original array
// uses value from original array when making a new one

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
//   { name: 'anna', age: 35, position: 'the boss' },
// ];
// const randomWord = people.map(function () {});
// console.log(randomWord);
// the above log came back undefined because functions by default comes back undefined when you dont return anything

// const detail = people.map(function (person) {
//   return person.age + 20;
// });
// console.log(detail);

// example 2

// const newPeople = people.map(function (person) {
//   return {
//     firstName: person.name.toUpperCase(),
//     oldAge: person.age + 20,
//   };
// });

// console.log(newPeople);

// example 3
// const names = people.map(function (person) {
//   return `<h1>${person.name}</h1>`;
// });
// document.body.innerHTML = names.join('');
// console.log(names);

//      FILTER ARRAY METHODS
// characteristics of filter array method
// does return a few array
// can manipulate the size of a new array
// returns based on condition

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
//   { name: 'anna', age: 35, position: 'the boss' },
// ];
// const youngPeople = people.filter(function (person) {
//   return person.age <= 25;
// });
// console.log(youngPeople);

// const developer = people.filter(function (person) {
//   return person.position === 'developer';
// });
// console.log(developer);

// const seniorDeveloper = people.filter(function (person) {
//   return person.position === 'seniorDeveloper';
// });
// console.log(seniorDeveloper);

//      FIND ARRAY METHODS
// characteristics of find array method
// returns single instances
// returns first match, if theres no match then it comes back as undefined
// great for getting unique values

// const people = [
//   { name: 'bob', age: 20, position: 'developer', id: 1 },
//   { name: 'peter', age: 25, position: 'designer', id: 2 },
//   { name: 'susy', age: 30, position: 'the boss', id: 3 },
//   { name: 'james', age: 10, position: 'manager', id: 3 },
//   { name: 'anna', age: 35, position: 'the boss', id: 4 },
// ];

// // YOU CAN ALSO USE FINED ARRAY METHOD, BY DIRECTLY LOGGING IN DETAILS TO THE CONSOLE LOG
// const names = ['bob', 'cherry', 'joy'];
// console.log(
//   names.find(function (name) {
//     return name === 'bob';
//   })
// );
// // DIFFERENCE BTW FIND AND FILTER ARRAY METHOD
// //   1
// // find array method
// const identify = people.find(function (person) {
//   return person.id === 3;
// });
// console.log(identify);
// // filter array method
// const youngPeople = people.filter(function (person) {
//   return person.id === 3;
// });
// console.log(youngPeople);

// // 2
// // find array method
// const identify2 = people.find(function (person) {
//   return person.id === 3;
// });
// console.log(identify2.name);
// // filter array method
// const youngPeople2 = people.filter(function (person) {
//   return person.id === 3;
// });
// console.log(youngPeople2.name);
// // to solve the undefine prolem above in filter, to target the name you woukd have to use the array method/format(i.e making use of index [0] )

// // filter array method
// const youngPeople3 = people.filter(function (person) {
//   return person.id === 3;
// });
// console.log(youngPeople3[0].name);

//      REDUCE ARRAY METHODS
// characteristics of reduce array method
// iterates, callback function
// reduce to a single value - number, array, object
// 1 parameter ('acc') - total to all calculations
// 2 parameter ('curr') - current iteration/values

// const people = [
//   { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
//   { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
//   { name: 'susy', age: 30, position: 'the boss', id: 3, salary: 400 },
//   { name: 'james', age: 10, position: 'manager', id: 4, salary: 500 },
//   { name: 'anna', age: 35, position: 'the boss', id: 5, salary: 500 },
// ];
// const total = people.reduce(function (acc, currItem) {
//   console.log(`total: ${acc}`);
//   console.log(`current money: ${currItem.salary}`);

//   acc += currItem.salary;
//   return acc;
// }, 5);
// console.log(total);

// ================================================
// MATH
// STANDARD BUILT-IN OBJECTS
// ================================================
// const number = 4.637995;
// const result = Math.floor(number);
// console.log(result);

// const result = Math.floor(9.6293);
// console.log(result);

// const number = 4.1227995;
// const result = Math.ceil(number);
// console.log(result);

// const number = 25;
// const result = Math.sqrt(number);
// console.log(result);

// const result = Math.PI;
// console.log(result);

// const result = Math.min(6, 4, 1, 2, 8);
// console.log(result);

// const result = Math.max(6, 4, 1, 2, 8);
// console.log(result);

// const result = Math.random();
// console.log(result);

// const result = Math.random() * 10;
// console.log(result);

// const result = Math.floor(Math.random() * 10);
// console.log(result);

// const result = Math.floor(Math.random() * 10 + 1);
// console.log(result);

// const result = Math.ceil(Math.random() * 10);
// console.log(result);

// ================================================
// date
// ================================================
// const months = [
//   'january',
//   'february',
//   'march',
//   'april',
//   'may',
//   'june',
//   'july',
//   'august',
//   'september',
//   'october',
//   'november',
//   'december',
// ];
// const days = [
//   'sunday',
//   'monday',
//   'tuesday',
//   'wednesday',
//   'thursday',
//   'friday',
//   'saturday',
// ];
// const date = new Date();
// // console.log(date.getMonth());

// // // JUST INCASE YOU DONT WANT A CURRENT DATE AND YOU WANT TO SET/FIX A DATE YOU CAN ALSO DO THAT BY...
// // const date = new Date('1/12/1999');
// // // the 1 = month 12 = date 1999 = year

// const month = date.getMonth();
// console.log(months[month]);
// const day = date.getDay();
// console.log(days[day]);

// // // you can also log it like this
// // console.log(days[date.getDay()]);

// console.log(date.getDate());
// console.log(date.getFullYear());

// const sentence = `Giveaway ends on ${days[day]} ${date.getDate()} ${
//   months[month]
// } ${date.getFullYear()}`;
// document.body.innerHTML = sentence;
// console.log(sentence);

// ================================================
// DOM   duration 7:11:19
// select the element or group of elements that you want to affect
// decide the effect you want to apply to the selection

// also note
// once you select a element, what we will get back is a node object or a node list, which is an array like object
// ================================================

// document.body.style.backgroundColor = 'red';
// document.body.style.color = 'yellow';
// document.getElementById('btn').style.backgroundColor = 'green';
// document.querySelector('h2').style.fontSize = '4rem';
// // THIS IS FOR MULTIPLE PURPOSE
// const randomElement = document.getElementById('h3'); // then what you want to do with it

// // window object
// // console.log(window);

// const Abutton = document.getElementById('btn');
// console.log(Abutton);
// const heading = document.querySelector('h2');
// console.log(heading);
// const name = btn.nodeName;
// console.log(name);
// const css = btn.style;
// console.log(css);

// ====================================================
// window object
// document
// console.dir
// =====================================================
// alert('hello');
// console.dir(document);

// getElementById('idname') EXAMPLE

// const h2 = document.getElementById('sub-title');
// h2.style.color = 'red';
// const btn = document.getElementById('btn');
// document.getElementById('btn').style.backgroundColor = 'green';
// document.getElementById('btn').style.color = 'white';

// getElementByTagName('tagname') EXAMPLE

// node-list = array-like object
// index lenght prperty but not array methods
// const heading = document.getElementsByTagName('h2');
// heading[0].style.color = 'red';
// //     OR
// // document.getElementsByTagName('h2')[1].style.color = 'blue';

// const items = document.getElementsByTagName('li');
// items[4].style.fontSize = '4rem';
// items[3].style.color = 'orange';

// //=======
// // NOTE
// // node-list are not arrays but array-like in the sense that it starts with the index number of 0 E.g
// console.log(items);
// console.log(items.length);

// // but when you make use of array methods like foreach, you will realize its not a array

// // items.forEach(function (item) {
// //   console.log(item);
// // });

// // although, it is possible to convert a node-list to an array e.g
// const newItem = [...items];
// newItem.forEach(function (person) {
//   console.log(person);
// });
// //=======

// getElementByClassName('classname') EXAMPLE

// const listItems = document.getElementsByClassName('special');
// listItems[2].style.color = 'green';
// console.log(listItems);

// querySelector('any css')- this selects single EXAMPLE
// querySelectorAll('any css')- this selects all EXAMPLE

// //EXAMPLE 1
// const result = document.querySelector('.btn');
// result.style.color = 'red';
// //EXAMPLE 2
// const result2 = document.querySelector('h2');
// result2.style.color = 'yellow';
// //EXAMPLE 3
// const result3 = document.querySelector('#names');
// result3.style.backgroundColor = 'pink';
// //EXAMPLE 4
// const lastItem = document.querySelector('li:last-child');
// lastItem.style.color = 'green';
// console.log(lastItem);
// //EXAMPLE 5
// const lastItem2 = document.querySelector('li:first-child');
// lastItem2.style.color = 'purple';
// console.log(lastItem2);
// //EXAMPLE 6
// // in querySelectorAll - we can right away use foreach without  converting node to array

// const lastItem3 = document.querySelectorAll('.special');
// lastItem3.forEach(function (item) {
//   console.log(item);
//   item.style.color = 'blue';
// });
// //EXAMPLE 7
// const random = document.querySelectorAll('.special');
// for (i = 0; i < random.length; i++) {
//   random[i].style.color = 'yellow';
// }

//  //EXAMPLE 7
// const result2 = document.querySelectorAll('h2');
// for (i = 0; i < result2.length; i++) {
//   result2[i].style.color = 'blue';
// }
// //EXAMPLE 8
// const all = document.querySelectorAll('*');
// for (let i = 0; i < all.length; i++) {
//   all[i].style.backgroundColor = 'red';
// }

// ====================================================
// chidNodes- when using the child node, it returns all childNodes including white space which is treated as a text node
// children
// firstchild
// lastchild
// ====================================================
// childNodes EXAMPLE
// const people = document.querySelector('#names');
// const result = people.childNodes;
// console.log(result);

// FIRSTCHILD EXAMPLE
// const result2 = people.children;
// console.log(result2);
// console.log(people.firstChild);

// LASTCHILD EXAMPLE
// console.log(people.lastChild);

// PARENT-ELEMENT EXAMPLE
// const list = document.querySelector('.fruits');
// console.log(
//   list.parentElement.parentElement.parentElement.parentElement.parentElement
// ); // if you add another .parentElement it would come out as null

// const list = document.querySelector('.fruits');
// const parent = list.parentElement.parentElement;
// parent.style.color = 'red';

////  NEXT-SIBLING EXAMPLE
// const first = document.querySelector('.first');
// const firstResult = (first.nextSibling.nextSibling.style.color = 'red'); // when using the nextsibling you need to run it twice otherwise the first value will just be a white  space
// console.log(firstResult);

// // PREVIOUS-SIBLING EXAMPLE
// const last = document.querySelector('.last');
// const lastResult = (last.previousSibling.previousSibling.style.color = 'red');
// console.log(last);

// nextElementSibling / previousElementSibling
// instead of running nextsibling or previousSibling twice you can use previousSibling / previousElementSibling once and get the result you want not white space text

// //nextElementSibling  EXAMPLE
// const first = document.querySelector('.first');
// const firstResult = (first.nextElementSibling.style.color = 'red');
// console.log(firstResult);

// // previousElementSibling EXAMPLE
// const last = document.querySelector('.last');
// const lastResult = (last.previousElementSibling.style.color = 'blue');
// console.log(last);

// ====================================================
// nodeValue
// textContent
// duration 8:03:33
// ====================================================

//  // nodeValue example
// const item = document.getElementById('sub-title');
// // const result = item.nodeValue; // if you do it this way it wil come back as null, rather do it like...
// // const result = item.childNodes[0].nodeValue; //or
// const result = item.firstChild.nodeValue;
// console.log(result);

// // textContent example
// const item = document.getElementById('sub-title');
// const content = item.textContent;
// console.log(content);

// ================================================
// getAttribute() - helps to get the value of the attribute
// setAttribute()
// ================================================

// // EXAMPLE 1 GET CLASS ATTRIBUTE
// const first = document.querySelector('.attribute');
// const result = first.getAttribute('class');
// console.log(result);
// // EXAMPLE 2 GET ID ATTRIBUTE
// const result2 = first.getAttribute('id');
// console.log(result2);
// // EXAMPLE 3 GET href ATTRIBUTE
// const first2 = document.querySelector('#link');
// const result3 = first2.getAttribute('href');
// console.log(result3);
// // EXAMPLE 4 GET set ATTRIBUTE and  change text content
// const result4 = first2.nextElementSibling;
// result4.setAttribute('class', 'first');
// result4.textContent = 'i also have a class of attribute';
// console.log(result4);

// ================================================
// className
// classlist  duration 8:16:12
// ================================================
// THIS CAN ONLY WORK WITH A SPECILALLY CREATED ELEMENTS IN THE INDEX.HTML. YOU HAVE TO UNCOMMENT THE ELMENTS FOR IT TO WORK
// const first = document.querySelector('#first');
// const second = document.querySelector('#second');
// const third = document.querySelector('#third');
// const forth = document.querySelector('#forth');
// const classValue = first.className;
// console.log(classValue);
// second.className = 'text';
// // when you want to add multiple classes to an element you can do it the following ways
// // using className or
// third.className = 'colors text';
// // using classLists
// // short way
// forth.classList.add('colors', 'text');
// // long way
// forth.classList.add('text');
// forth.classList.add('colors');
// const forthValue = forth.classList;
// console.log(forthValue);
// // as we can add classes to an element, so can we remove classes
// forth.classList.remove('colors');
// third.classList.remove('text');
// // CONTAINS--CLASSLIST
// let results = forth.classList.contains('text');
// if (results) {
//   console.log('hello world');
// } else {
//   console.log('i am chinelo');
// }
// // // to check the classes both element has
// // console.log(forth.classList);
// // console.log(third.className);
// ================================================
// createElement('element')
// createTextnode("text content")
// element.appendChild(childElement)
// ================================================

// EXAMPLE 1
// frst you create the parent element which in my case will be a div
// const bodyDiv = document.createElement('div');
// // then create a textNode = content of the element we created
// const text = document.createTextNode('a simple body div');
// // now merge them together using appendChild
// bodyDiv.appendChild(text);
// // final step
// document.body.appendChild(bodyDiv);

// // EXAMPLE 2
// const bodyDiv = document.createElement('div');
// const parent = document.createElement('h1');
// const text = document.createTextNode('hey hey hey');
// parent.appendChild(text);
// bodyDiv.appendChild(parent);
// document.body.appendChild(bodyDiv);

// // EXAMPLE 3
// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');
// heading.appendChild(headingText);
// heading.className = 'text';
// // OR
// heading.classList.add('colors');
// document.body.appendChild(heading);

// // EXAMPLE 4
// const result = document.querySelector('#result');
// const heading2 = document.createElement('h2');
// const Htext = document.createTextNode('heading2');
// heading2.appendChild(Htext);
// result.appendChild(heading2);

// // insertBefore - it helps to add a element before a choosen or prefered element
// // first option in the bracket is what you would be creating or adding in your document,
// //  second option is the location
// const result2 = document.querySelector('#result');
// const bodyDiv2 = document.createElement('p');
// const para = document.createTextNode('hello world');
// bodyDiv2.appendChild(para);
// document.body.insertBefore(bodyDiv2, result2);
// // random example duration 8:32:08
// const color = document.querySelector('.colors');
// result.insertBefore(headingText, color);

// // replace child (new,old)
// // EXAMPLE 5

// const smallheading = document.createElement('h6');
// const smallText = document.createTextNode(`i'm small heading text`);
// smallheading.classList.add('text');
// smallheading.appendChild(smallText);
// document.body.replaceChild(smallheading, bodyDiv);

// ================================================
// prepaid
// innerText
// ================================================

// const para = document.createElement('p');
// para.innerText = `i'm a dynamic paragraph`;
// // const result = document.querySelector('#sub-title');
// // result.appendChild(para)
// document.body.appendChild(para);
// // when you dontselect a container to appendChild in the html like line 1531, the newly created html resides at the bottom of your html file
// // but whem you select it like line 1530 it resides within/inside the selected container or element

// const para = document.createElement('p');
// para.innerText = `i'm a dynamic paragraph`;
// // document.body.prepend(para);
// const result = document.querySelector('.sub-container');
// result.prepend(para);
// prepend places the newly created element above any selected object while append places it bellow

// const para = document.createElement('p');
// para.innerText = `i'm a dynamic paragraph`;
// document.body.prepend(para);
// // and if a parent element is not sellected while using append it qutomatically stays at the top of the body in html

// ================================================
// remove
// removeChild
// ================================================

//REMOVE
// const result = document.querySelector('.sub-container');
// // result.remove();

// //REMOVECHILD
// // FOR THE REMOVE CHILD YOU WOULD HAVE TO TRAGET THE PARENT
// // const result = document.querySelector('.sub-container');
// // AND THEN which OF the CHILDren YOU WOULD WANT TO REMOVE
// // const child = document.querySelector('div');
// // instead of targeting the element div like line 1559, which is the first div in the html which is not the intended div you want
// // const child = result.querySelector('div');
// // you can target its parent container first, using RESULT then target the child div in it, which is what you want like line 1562
// // console.log(child);
// // result.removeChild(child);
// // removeChild helps make you choose the particular child you want out, out of the varieties of children that exists in the pparent container
// // in line 1564, RESULT stands for the parent element the child will be removed from, wjile the CHILD stand for the targedted/selected child to be out of the equation
// const result = document.querySelector('.sub-container');
// const child = result.querySelector('div');
// result.removeChild(child);

// ================================================
// innerHtml
// textContent duration 8:50:28
// ================================================
// const list = document.querySelector('#first');
// const div = document.querySelector('#text');
// const item = document.querySelector('.list');
// console.log(div.textContent);
// console.log(list.textContent);
// console.log(list.innerHTML);
// console.log(div.innerHTML);

//EXAMPLE 1
// const ul = document.createElement('ul');
// ul.innerHTML = `<li class="item">list item</li>
//       <li>list item 22</li><li class="item">list item</li>
//       <li>list item 22</li>`;
// document.body.appendChild(ul);

// // EXAMPLE 2
// const random = `random word`;
// const ul = document.createElement('ul');
// ul.innerHTML = `<li class="item">${random}</li>
//       <li>list item 22</li><li class="item">list item</li>
//       <li>list item 22</li>${random}`;
// document.body.appendChild(ul);

// // EXAMPLE 3
// // DIFFERENCE BTW TEXTCONTENT AND INNERHTML
// const list = document.querySelector('#first');
// const div = document.querySelector('#text');
// const item = document.querySelector('.item');

// // div.textContent = 'hello word';
// // item.innerHTML = 'hello people';
// div.textContent = `<li class="item">list item</li>
//       <li>list item 22</li>`;
// item.innerHTML = `<li>hey hey</li><li class="item">list item</li>
//       <li>list item 22</li>`;

// ================================================
// CSS
// ================================================

// const random = document.querySelector('.attribute');
// // random.style.background = 'red';
// // random.style.color = 'white'
// random.classList.add('colors');

// ================================================
//addEventlistener
// INSTRUCTIONS/STEPS
// select element
// addEventlistener
// what event, what to do
// ================================================
// EAXAMPLE 1
// const btn = document.querySelector('.btn-btn');
// const heading = document.querySelector('.heading');
// // using anonnymous callback function
// btn.addEventListener('click', function () {
//   heading.classList.add('red');
// });

// // EAXAMPLE 2
// const btn = document.querySelector('.btn-btn');
// const heading = document.querySelector('.heading');
// function changeColor() {
//   heading.classList.add('blue');
// }
// btn.addEventListener('click', changeColor);

// // EAXAMPLE 3
// const btn = document.querySelector('.btn-btn');
// const heading = document.querySelector('.heading');
// function changeColor() {
//   heading.classList.add('blue');
// }
// // when using this type of function make sure you dont invoke the function immediately as done below or else it will right away run the function without the click event,it ought to be a reference like in line 1641. i.e changeColor without the function bracket
// btn.addEventListener('click', changeColor());

// //EAXAMPLE 3
// // a simple logic  to add a partular style when you click on the button and remove the style when you click the button
// const btn = document.querySelector('.btn-btn');
// const heading = document.querySelector('.heading');
// // using anonnymous callback function
// btn.addEventListener('click', function () {
//   const hasClass = heading.classList.contains('red');
//   if (hasClass) {
//     heading.classList.remove('red');
//   } else {
//     heading.classList.add('red');
//   }
//   // this logic simple says when the h2 is with a class of .heading, has the class of .red, remove it when i click and when it doest have the class of red add it when i click
// });
// ================================================
// ADDEVENTLISTENER
// click - fires after full action occurs
// mousedown - buutton is pressed
// mouseup- button is released
// mouseenter- moved onto an elemen
// mouseleave- moved onto an element
// ================================================

// const btn = document.querySelector('.btn-btn');
// const heading = document.querySelector('.heading');
// btn.addEventListener('click', function () {
//   console.log('click');
// });
// btn.addEventListener('mousedown', function () {
//   console.log('down');
// });
// btn.addEventListener('mouseup', function () {
//   console.log('up');
// });
// heading.addEventListener('mouseenter', function () {
//   heading.classList.add('blue');
// });
// heading.addEventListener('mouseleave', function () {
//   heading.classList.remove('blue');
// });

// ================================================
//KEYS EVENT
// keypress - when key is pressed
// keydown - when key is down
// keyup- when key is released
// ================================================
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('keypress', function () {
//   console.log('you pressed a key');
// });
// nameInput.addEventListener('keydown', function () {
//   console.log('you pressed a key');
// });
// nameInput.addEventListener('keyup', function () {
//   console.dir(nameInput.value);
// });

// ================================================
// events objects arguments e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyboard
// prevent default() - prevents default behaviour
// ================================================

// const heading = document.querySelector('.heading2');
// const button = document.querySelector('.btnn');
// const link = document.querySelector('#random-link');
// // console.log(button);
// // heading.addEventListener('click', function () {
// //   heading.classList.add('blue');
// // });
// // currentTarget property helps to point out directly/target the property or element that has the eventListener property / event handler
// button.addEventListener('click', function (event) {
//   console.log(event.currentTarget);
// });
// heading.addEventListener('click', function (event) {
//   event.currentTarget.classList.add('blue');
// });
// button.addEventListener('click', function (event) {
//   event.currentTarget.classList.add('blue');
//   // event.type, shows the type of eventListener that  was added to the element when the action (click action) takes place
//   console.log(event.type);
// });
// function someFunc(e) {
//   // preventDefault, simply helps prevent default behaviours of an element
//   e.preventDefault();
//   e.currentTarget.classList.add('red');
// }
// link.addEventListener('click', someFunc);

// ================================================
// DIFFERENCE BTW CURRENT TARGETS AND TARGETS
// according to John Smilga  currentTarget always refers to the element to which the event handler has been attached to WHILE,
// targets - identifies the element on which the event occured i.e action takes place only on the element that was clicked
// ================================================

// NOTE: i think you use event/e kind of functions when when the element that has the event handler property is the same element you want to add the action or styles that is inside the function to

//  EAMPLE 1 USING CURRENTTARGET
// const buttons = document.querySelectorAll('.btns');
// buttons.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     e.currentTarget.style.color = 'green';
//     console.log(e.currentTarget);
//   });
// });

// // EXAMPLE 2 USING target
// const buttons = document.querySelectorAll('.btns');
// buttons.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     e.target.style.color = 'green';
//     console.log('target', e.target);
//     // NOTE: by using .target, when you the click on the "more nested"  in a child container that is inside the button element, the color 'green' only affects the part you clicked on, not the entire sentence (SECOND BUTTON MORE NESTED)
//   });
// });

// // EXAMPLE 3 (My own experiment!!)
// const buttons = document.querySelectorAll('.btns');
// buttons.forEach(function (btn) {
//   btn.addEventListener('click', function () {
//     btn.classList.add('text');
//   });
// });

// ================================================
// PROPOGATION, BUBBLING, CAPTURING
// allows select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked elements first then bubbles up -- default
// event capturing - fires at the roots and fires at reaching targets   duration 9:49:34
// ================================================

// const container = document.querySelector('.container');
// const list = document.querySelector('.list-items');

// function showBubbling(e) {
//   console.log('currenr target', e.currentTarget);
//   console.log('target', e.target);
// }
// function stop(e) {
//   console.log('you clicked on a link');
//   e.stopPropagation();
// }
// // list.addEventListener('click', stop);
// container.addEventListener('click', showBubbling, { capture: true });
// document.addEventListener('click', showBubbling, { capture: true });
// window.addEventListener('click', showBubbling, { capture: true });
// list.addEventListener('click', showBubbling, { capture: true });

// ================================================
// PROPOGATION, BUBBLING, CAPTURING example
// ================================================
// const container = document.querySelector('.container');
// const btn = document.querySelector('.btns');
// const heading = document.querySelector('.heading');

// function sayHello() {
//   console.log('hello world');
// }
// // heading.addEventListener('click', sayHello);

// btn.addEventListener('click', function () {
//   const element = document.createElement('h1');
//   element.classList.add('heading');
//   element.textContent = `i'm inside container`;
//   container.appendChild(element);
// });

// container.addEventListener('click', function (event) {
//   if (event.target.classList.contains('heading')) {
//     console.log('hello there');
//   }
// });
// //  i advice to go through the tutorial video if you dont fuuly understanf this note
// // NOTE: this section is about taking advantage of the default charateristic of bubbling propagation. /Here we deleted the initial h1 in the html and dynamically created one using event listener (line 1817) then used "event.target" (line 1824) on the parent container of the dynamically created h1 "(div with a class of container)" to target the h1 we created  and console log "hello" when you click the container

// ================================================
// submit event listener
// prevent default
// how to get a value
// ================================================
// const form = document.querySelector('#form');
// const name = document.querySelector('#name');
// const password = document.querySelector('#password');
// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   console.log('form submitted');
//   console.log(name.value);
//   console.log(password.value);
// });

// ================================================
// web strorage API - provided by browser
// session storag, local storage
// setItem, getItem, removeItem, clear
// ================================================

// sessionStorage.setItem('name', 'kelly');
// //  how to set localStorage data
// // the 'name' represents the key while the 'john' represents value
// localStorage.setItem('name', 'john');
// localStorage.setItem('friend', 'peter');
// localStorage.setItem('job', 'developer');
// localStorage.setItem('address', 'street 123');
// //  how to get localStorage data
// const name = localStorage.getItem('name');
// console.log(name);
// const job = localStorage.getItem('job');
// console.log(job);
// //  how to remove a particular data from localStorage data
// localStorage.removeItem('name');
// localStorage.removeItem('job');
// //  how to clear all data from localStorage data
// localStorage.clear();

// ================================================
// JSON.stringify(), JSON.parsel()
// ================================================

// const friends = ['jessy', 'kossy', 'bob'];
// // localStorage.getItem('friends', friends);
// // when your value is more than a string, probably an array or object, you need to store it using JSON.stringify
// localStorage.setItem('friends', JSON.stringify(friends));
// // const values = localStorage.getItem('friends');
// // and when accessing the value you need to use JSON.parse . So that you can keep whatever structure you have, if you have an array you would get an array, if you have a object you would get an object
// const values = JSON.parse(localStorage.getItem('friends'));
// console.log(values[0]);
// // how to check if a value is already in a localStorage

// let fruits;
// if (localStorage.getItem('fruits')) {
//   // fruits = JSON.parse(localStorage.getItem('fruits'));
//   console.log('hello there');
// } else {
//   fruits = [];
// }
// console.log(fruits);
// fruits.push('apple');
// fruits.push('orange');
// localStorage.setItem('foods', JSON.stringify(fruits));

// let fruits;
// if (localStorage.getItem('foods')) {
//   fruits = JSON.parse(localStorage.getItem('foods'));
// } else {
//   fruits = [];
// }
// console.log(fruits);
// // fruits.push('apple');
// fruits.push('orange', 'mango');
// localStorage.setItem('foods', JSON.stringify(fruits));

//            THE END!!!!!!!!
