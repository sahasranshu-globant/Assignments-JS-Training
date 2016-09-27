
/* Function to check palindrome*/
function isPalindrome(str){
	//reverse a string
	var reversed = str.split("").reverse().join("");
	
	//check if original and reversed strings match
	if(reversed == str)
		return true;

	return false;
}

//Change 'str' to check multiple strings for palindrome
var str = "i ama i";

var result = isPalindrome(str);

//display result
result ? console.log('Palindrome') : console.log('Not a Palindrome')

