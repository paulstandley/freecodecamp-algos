// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence
/* 
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
// make a lower case string
  let strLow = str.toLowerCase();
// split into array
  let strArr = strLow.split(' ');
  let retStr, retHolder = [];
// loop over array  
  for (let i = 0; i < strArr.length; i++) {
// loop over string 
    let strWord = strArr[i];   
    for (let j = 0; j < strWord.length; j++) {
// if string is first index      
      if(j === 0) {
// set upper case value        
        retStr = strWord[j].toUpperCase();     
      }else {
        retStr += strWord[j];
      }
    }
// push the upper case string into holder    
    retHolder.push(retStr);
  }
// turn bact to a sring for the return statement  
  return retHolder.join(' ');
}

titleCase("I'm a little tea pot is not the programmers take on the subject");// should return a snarky string.
//titleCase("I'm a little tea pot");// should return I'm A Little Tea Pot.
//titleCase("sHoRt AnD sToUt");// should return Short And Stout.
//titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");// should return Here Is My Handle Here Is My Spout