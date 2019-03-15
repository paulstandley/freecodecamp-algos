// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/

function findElement(arr, func) {
  for(let num = 0; num < arr.length; num++) {
// if the function returns true return the value from the array  
    if(func(arr[num])) {
      return arr[num];
    }
// if the array has no true values in it return underfined    
    if(num === arr.length - 1) {
      return undefined;
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);// should return 2
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });// should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });// should return undefined.