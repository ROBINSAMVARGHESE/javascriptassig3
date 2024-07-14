// Array Method

// 1. concat

const arr1 = ['akhil', 'manu', 'ramu', 'raj']
const arr2 = [1, 2, 3, 4, 5, 6, 7]
let concatArray = arr1.concat(arr2);
console.log(concatArray);

// 2. every

let words = ["apple", "banana", "orange", "grape"];
let allfruitswords = words.every(word => word.length > 3);
console.log(allfruitswords);


// 3. fill

let array = [1, 2, 3, 4, 5];
array.fill(0, 2, 4);
console.log(array);

// 4. find

let numbers = [1, 3, 5, 8, 10];
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

// 5. findIndex

let numbers1 = [1, 3, 5, 8, 10];
let index = numbers.findIndex(num => num % 2 === 0);
console.log(index);

// 6. flat

let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flattenedArray = nestedArray.flat(2);
console.log(flattenedArray);

// 7. includes

const arr = ["Banana", "Orange", "Apple", "Mango"];
let includes = arr.includes("Banana", 2);
console.log(includes);

// 8. indexOf

const fruits = ["Grape", "Orange", "Apple", "Pineapple"];
let indexof = fruits.indexOf("Apple", 2);
console.log(indexof);

// 9. join

let arrayfruit = [' Apple ', ' Banana ', ' Cherry '];
let result = arrayfruit.join(" and ");
console.log(result);

// 10. lastIndexOf

let array1 = ['apple', 'banana', 'cherry', 'date', 'banana'];
let lastIndexof = array1.lastIndexOf('banana', 3);
console.log(lastIndexof);

// 11. pop

const fruit = ['Kiwi', 'Apple', 'Orange', 'Mango'];
const removedfruits = fruit.pop();
console.log(removedfruits);


// 12. push

const Numbers = [1, 2, 3, 4, 5, 6];
Numbers.push(7);
console.log(Numbers);

// 13. reverse

const Numbers1 = [1, 2, 3, 4, 5, 6];
Numbers.reverse();
console.log(Numbers);

// 14.Unshift 
let names = ["A", "B", "C", "D"];
let added = names.unshift("E", "F");
console.log(names);

// 15. shift

let newfruit = ["Banana", "Orange", "Apple", "Mango"];
let removedname = newfruit.shift();
console.log(removedname);

// 16. slice

let myArray = [1, 2, 3, 4, 5, 6, 7, 8,];
let slicedArray = myArray.slice(2, 5);
console.log(slicedArray);

// 17. some

const num = [1, 2, 3, 4, 5];
const GreaterThanTen = numbers.some(number => number > 10);
console.log(GreaterThanTen);

// 18. sort

const numb = [1, 92, 8, 9, 6, 4]
console.log(numb.sort());

// 19. splice

const months = ["jan", "Feb", "Mar", "Apr"];
months.splice(1, 2, "jun", "Jul");
console.log(months);

// 20. toString

let person = { name: "Alice", age: 30, place: "IND,Kerala,Kochi" };
let personString = person.toString();
console.log(personString);

// 21. filter

const text = [1, 2, 3, 4, 5];
const evenNumbers = text.filter(number => number % 2 === 0);
console.log(evenNumbers);

// 22. reduce
// Executes a reducer function on each element of the array, resulting in a single output value.
const textsnum = [1, 2, 3, 4, 5];
const sum = textsnum.reduce((abc, cab) => {
  return abc + cab
}, 0);
console.log(sum);


// 23. map
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
const textnumb = [4, 9, 16, 25];
const sums = textnumb.map(Math.sqrt)
console.log(sums);

// 24. forEach
// Executes a provided function once for each array element.

const numbered = [1, 2, 3, 4, 5];
numbers.forEach(function (numbered) {
  console.log(numbered * 2);
});


// string method 

// 1. concat
let str1 = "hello";
let str2 = "world";
let str3 = str1.concat(str2);
console.log(str3);

// 2. includes
let str = 'Hello World';
console.log(str.includes('World'));

// 3. indexOf
let word = "a,b,c,d"
console.log(word.indexOf('d', 4));

// 4.lastIndexOf
let str6 = "hello world hello";
console.log(str6.lastIndexOf("hello"));

// 5.padEnd
let name = "John";
console.log(name.padEnd(8, '**'));

// 6.padStart
let colr = "Red";
console.log(colr.padStart(6, '--'));

// 7.repeat
let str4 = 'Hello';
console.log(str1.repeat(3));

// 8.replace
let sentence3 = 'i can read this sentence!'
console.log(sentence3.replace('i', 'I'));

// 9.search
let sentence1 = "she is my friend"
console.log(sentence1.search('ismy'));

// 10.slice
let first = 'hello world';
let result8 = first.slice(0, 5);
console.log(result8);

// 11.split
const text1 = "how was your day."
const result1 = text1.split('w')
console.log(result1);

// 12.startsWith
let world = "Hello world, welcome to the universe.";
let result2 = world.startsWith("Hello", 1);
console.log(result2);

// 13.substr
let text2 = "Hello world!";
let result3 = text2.substr(1, 4);
console.log(result3);

// 14.substring
let text3 = "Hello world!";
let result4 = text3.substring(1, 4);
console.log(result4);

// 15.toLowerCase
let text4 = "HELLO WORLD!";
let result5 = text4.toLowerCase();
console.log(result5);

// 16.toUpperCase
let text5 = "hello world!";
let result6 = text5.toUpperCase();
console.log(result6);

// 17.trim
let text6 = 'Quite Please';
let result7 = text6.trim();
console.log(result7);

// 18.trimEnd (or trimRight)
let message = 'hello welcome to the world'
console.log(message.trimEnd());

// 19.trimStart (or trimLeft)
let message1 = 'hello welocome to the world'
console.log(message1.trimStart());

// 20.charAt
let sentence2 = 'the quick brown fox';
console.log(sentence2.charAt(10));

// 21.charCodeAt
let str5 = 'the quick brown fox';
console.log(str5.charCodeAt(10));