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
  let holder = [0];
// iterate over the array to get each sub array
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
// get last index of the holder array to comare values push the latest biggesst number 
      let holderLength = holder.length - 1;
      if(arr[i][j] > holder[holderLength]) {
        holder.push(arr[i][j]);
      }
// use last iteration to push the last index into return array       
      if(j == 3) {
        retHolder.push(holder[holderLength]);
        holder = [0];
      }
    }
  }
// return retholder  
  return retHolder;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);// [5, 27, 39, 1001]

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);//  [9, 35, 97, 1000000]