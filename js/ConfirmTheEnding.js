// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Do not use the built-in method .endsWith() to solve the challenge.
*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");// true
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");// false
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");// false
confirmEnding("Open sesame", "same");// true