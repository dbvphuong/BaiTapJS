 
Bài 1:
Palindrome String  
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.  
Example:  
"A man, a plan, a canal: Panama" is a palindrome.  
"race a car" is not a palindrome.  
Return 0 / 1 ( 0 for false, 1 for true ) for this problem  
```
function palinDrome (str){
  var str = str.toLowerCase();
  var arr = str.split("");
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === ","){
      arr[i] = undefined;
    }
    else if(arr[i] === ":"){
      arr[i] = undefined;
    }
    else if(arr[i] === " "){
      arr[i] = undefined;
    }
  }
// Bỏ dấu , : cách đi.
  arr = arr.join("").split("");
  var arr1 = arr.slice();
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr1[arr.length - 1 - i]
  }
  
  if (arr.join() ===  arr1.join()){
    return "String is a palindrome"
  }
  else 
  return "String is not a palindrome";
}
console.log(palinDrome("race a car"));
console.log(palinDrome("A man, a plan, a canal: Panama"));
```

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
  var arr1 = [];
  for (let i = arr.length - 1; i >= 0; i--){
    if (arr[i] !== "") {
      arr1.push(arr[i]);
    }
  }
  arr1 = arr1.join(" ");
  return arr1;
}
console.log( reverseString ("the sky is   blue"));
```
