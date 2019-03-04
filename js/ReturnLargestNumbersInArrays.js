// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/
document.write("Hi Ya from *.js");
function largestOfFour(arr) {
  // You can do this!
// make array holders
  let retHolder = [];
  let holder = [-100000000];
// iterate over the array to get each sub array
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
// get last index of the holder array to comare values push the latest biggesst number 
      if(arr[i][j] > holder[holder.length - 1]) {
        holder.push(arr[i][j]);
      }
// use last iteration to push the last index into return array       
      if(j == 3) {
        retHolder.push(holder[holder.length - 1]);
        holder = [-100000000];
      }
    }
  }
  console.log(retHolder)
  return retHolder;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);// [5, 27, 39, 1001]

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);//  [9, 35, 97, 1000000]

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]); // [25, 48, 21, -3]