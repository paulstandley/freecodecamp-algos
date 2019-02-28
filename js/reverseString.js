// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

function reverseString(str) {
  var strReverse = str.split('').reverse().join('');
  return strReverse;
}

reverseString("world");
reverseString("hello");