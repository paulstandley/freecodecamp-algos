// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
/* 
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
// map over array return array, push truthy values, return without falsy value
  let retVal = [];   
  arr.map(current => {
// if checks for truthy falsy values   
    if(current) {
      retVal.push(current)
    }
  });
  return retVal;
}

bouncer([7, "ate", "", false, 9]);