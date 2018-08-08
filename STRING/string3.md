Minimum Characters required to make a String Palindromic  
You are given a string. The only operation allowed is to insert characters in the beginning of the string.  
How many minimum characters are needed to be inserted to make the string a palindrome string
```
Example:
Input: ABC
Output: 2
Input: AACECAAAA
Output: 2
```

TASK:  

```
function palinDrome (t){
  var u = t.slice();
  for (let i = 0; i < t.length; i++){
    t[i] = u[t.length - 1 - i]
  }
  
  if (t.join() ===  u.join()){
    return true;
  }
  else 
  return false;
}// kiểm tra xem array t có là palindrome không.

function stringPalindromic(str){
  var arr = str.split("");
  var arr1 = [];
  var arr2 = [];
  for (let i = 0; i <= arr.length; i++){
     arr1.unshift(arr.slice(i, arr.length).reverse().concat(arr))
  }// arr1 gồm các arr con.

  for (let i = 0; i < arr1.length; i++){
    if(palinDrome(arr1[i]) === true){
      arr2.push(arr1[i].length - arr.length);
    }
  }// arr2 chứa chiều dài array con của arr1 thỏa mãn là palindrome.
  
  return Math.min(...arr2);
}

console.log(stringPalindromic("ABC"));
console.log(stringPalindromic("AACECAAAA"));
console.log(stringPalindromic("ABBAC"));
```
