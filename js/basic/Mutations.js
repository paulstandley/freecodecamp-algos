// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
/* 
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "
*/

function mutation(arr) {
  // make two variables for each value set all to lowercase and split into array
    let first = arr[0].toLowerCase().split('');
    let second = arr[1].toLowerCase().split('');
  // iterate over values
    let count = 0;
    let holder = [];
    let booleans = true;  
    for(let i = 0; i < first.length; i++) {
      for(let j = 0; j < second.length; j++) {
  // check first values against second values      
        if(first[i] === second[j]) {
  // add one to count and push j to holder         
          holder.push(j);
          count++;
        }
      }
    }  
  // sort holder array
    holder.sort(function(a, b) {
      return a - b;
    });
  //  map over holder fill array with booleans ? set boolean to false
    let array = holder.map(function(current, index) {
      if(current <= index) {
        return true;
      }else{
        booleans = false;
        return false;
      }
    });
  // if count greater than equal to the length and the boolean is true  
    if(count >= second.length && booleans) {
      return true;
    }else{
      return false;
    }
  }

mutation(["hello", "hey"]);// should return false.
//mutation(["hello", "Hello"]);// should return true.
//mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);// should return true.
//mutation(["Mary", "Army"]);// should return true.
//mutation(["Mary", "Aarmy"]);// should return true.
//mutation(["Alien", "line"]);// should return true.
//mutation(["floor", "for"]);// should return true.
//mutation(["hello", "neo"]);// should return false.
//mutation(["voodoo", "no"]);// should return false.