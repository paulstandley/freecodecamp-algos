// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

/* 
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function
*/

function factorialize(num) {
  var retVal = 1;
  var i = 2;
  if(num <= 1) {
    return retVal;
  }else{
    while(i <= num) {
      retVal *= i;
      i++;
    }
    return retVal;
  }
}
console.log(factorialize(5));