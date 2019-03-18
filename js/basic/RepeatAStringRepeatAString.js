// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
/* 
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
  // repeat after me
// check for negitive numbers return empty string
  if(num >= 0) {
// make an empty string return variable    
    let retstr = "";
// and string together num times then return    
    for(let i = 1; i <= num; i++) {
      retstr += str;
    }
    document.write(str,  retstr)
    return retstr;
  }else{
    return "";
  }
}

repeatStringNumTimes("abc", 3);// "abcabcabc"
repeatStringNumTimes("*", 8);// "********"
repeatStringNumTimes("abc", -2);// ""