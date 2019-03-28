// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
// sort array to make sure the lowest values is at first index  
  let array = arr.sort(function(a, b) {
    return a - b;
  });
// add values put it in sum, find the distances between them, get the start and end values
  const sum = array[0] + array[1],between = array[1] - array[0] - 1,start = array[0] + 1;
// loop over to keep track (2 + 3 = 5 retVal) (5 + 10 = 15 retVal)
  let current = start;
  let retVal = 0;
  for(let i = 0; i < between; i++) {
    retVal += current;
    current++;
  }
/* add sum to retVal then return value
     sum     +   retVal  
(1 + 4 = 5) + (2 + 3 = 5) = 10 
(5 + 10 = 15) + (6 + 7 + 8 + 9 = 30) = 45 */
  retVal += sum; 
  return retVal;
}

sumAll([1, 4]);// should return 10. (1 + 4 = 5) + (2 + 3 = 5) = 10
sumAll([4, 1]);// should return 10.  
sumAll([5, 10]);// should return 45. (5 + 10 = 15) + (6 + 7 + 8 + 9 = 30) = 45
sumAll([10, 5]);// should return 45. 