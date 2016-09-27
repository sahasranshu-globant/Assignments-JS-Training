//to reverse the string
var reverseString = function(str) {
    var getString = str.replace(/ /g, '');
    getString = getString.split("").reverse().join("");
    return getString;
};

//to check if the string is palindrome 
var isPalindrome = function(str){
  var string = str.replace(/ /g, '');
  var stringReversed = reverseString(str);
  if(string === stringReversed) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome("i ama i"));
console.log(isPalindrome("hello mike"));