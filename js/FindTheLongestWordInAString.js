// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string/

/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/ 

function findLongestWordLength(str) {
// split up string into array of words
  let strArr = str.split(' ');
// make a return value holder array  
  let retHolder = [];
// map over string array to push values into return value holder  
  const mapstr = strArr.map(function(current) {
    retHolder.push(current.length);
  });
// use sort to order by number value lowest firtst   
  retHolder.sort(function(a, b){
    return a - b;
  });
// return holder value last index in array  
  return retHolder[retHolder.length -1];
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("May the force be with you");
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");