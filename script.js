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

const Numbers = [1,2,3,4,5,6];
Numbers.push(7); 
console.log(Numbers);

// 13. reverse

const Numbers1 = [1,2,3,4,5,6];
Numbers.reverse(); 
console.log(Numbers);

// 14. shift

let newfruit = ["Banana", "Orange", "Apple", "Mango"];
let removedname = newfruit.shift();
console.log(removedname);

// 15. slice

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let slicedArray = myArray.slice(2, 5);
console.log(slicedArray);  
  


// 16. some
// Checks if at least one element in the array satisfies a condition.


// 17. sort
// Sorts the elements of an array in place and returns the sorted array.


// 18. splice
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.


// 19. toString
// Returns a string representing the specified array and its elements.


// 20. filter
// Creates a new array with all elements that pass the test implemented by the provided function.


// 21. reduce
// Executes a reducer function on each element of the array, resulting in a single output value.


// 22. map
// Creates a new array populated with the results of calling a provided function on every element in the calling array.


// 23. forEach
// Executes a provided function once for each array element.
