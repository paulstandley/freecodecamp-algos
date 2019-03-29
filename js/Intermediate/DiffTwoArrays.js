// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);//should return ["pink wool"]
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);// should retuen []
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);// should return [4]
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);//should return ["snuffleupagus", "cookie monster", "elmo"]
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);// should return [1, "calf", 3, "piglet", 7, "filly"]