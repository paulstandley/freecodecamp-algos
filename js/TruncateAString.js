// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
/* 
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    // Clear out that junk in your trunk
    // make a variable string with three ...
    let dotts = "...";
    // use split to make an array, splice to cut string at index num + 1 then slice and join
    let strArray = str.split('');
    if (str.length < num) {
        return str;
    } else if (str.length === num) {
        return str;
    } else {
        strArray.splice(num, num + 1, dotts);
        strArray = strArray.slice(0, num + 1).join('');
        return strArray;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); // A-tiskit...
truncateString("Peter Piper picked a peck of pickled peppers", 11); // should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1); // should return "A...".
truncateString("Absolutely Longer", 2); // should return "Ab..."