// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Do not use the built-in method .endsWith() to solve the challenge.
*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  document.write("str : " + str + ": target : " + target + " : ");
  // split string into an array and get last index off the array and reasign it with only the last indexed string
  let lastIndexOfString = str.split(' ');
  lastIndexOfString = lastIndexOfString[lastIndexOfString.length - 1];
  console.log(lastIndexOfString + " : " + target)
  // check if the last index is the same as the target
  if(lastIndexOfString.substring(lastIndexOfString.length - target.length) === target) {
    console.log(true)
    return true;
  }else{
    console.log(false)
    return false;
  }
}

confirmEnding("Open sesame", "game");// false.
confirmEnding("Bastian", "n");// true
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");// false
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");// false
confirmEnding("Open sesame", "same");// true