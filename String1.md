 
Bài 1:
Palindrome String  
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.  
Example:  
"A man, a plan, a canal: Panama" is a palindrome.  
"race a car" is not a palindrome.  
Return 0 / 1 ( 0 for false, 1 for true ) for this problem  


Bài 2:  
Reverse the String  
Given an input string, reverse the string word by word.  
Example:  
Given s = "the sky is blue",  
return "blue is sky the".  
A sequence of non-space characters constitutes a word.  
Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.  
If there are multiple spaces between words, reduce them to a single space in the reversed string.  
```
function reverseString (str){
  var arr = str.split(" ");
  var arr1 = arr.slice();
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == "") {
      arr1.splice(i,i+1);
    }
  }
  arr1.join(" ");
  return arr1;
}
console.log( reverseString ("the sky is   blue"));
```
