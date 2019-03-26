// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
// make variables  
  let slice_holder = "";
  let retVal = [];
  let num = 0;
  let num_size = size;
// iterate over the array by dividing the array length over size and rounding up  
  for(let i = 0; i <= Math.ceil(arr.length / size) - 1; i++) {
// slice the array at num untill num_size    
    slice_holder = arr.slice(num, num_size);
// add size to to them and push slice holder to return value empty slice_holder    
    num += size;
    num_size += size;
    retVal.push(slice_holder);
    slice_holder = "";
  }
  return retVal;
}

//chunkArrayInGroups(["a", "b", "c", "d"], 2);// should return [["a", "b"], ["c", "d"]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);// should return [[0, 1, 2], [3, 4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);// should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);// should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);// should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);// should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);// should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].