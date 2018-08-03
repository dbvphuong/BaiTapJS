Implement strStr(string, substring).  
strstr(string, substring) - locate a substrin in a string  
 
Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.  
Example 1:  
```
          "input": string = "AABBACAADAABAABA",  substring = "AABA",
          "output": 9
 ```
Example 2:  
```
          "input":
              string = "bbaabbbbbaabbaabbbbbbabbbabaabbbabbabbbbababbbabbabaaababbbaabaaaba",
              substring = "babaaa"
            "output": 48
 ```
Example 3:  
```
          "input": string = "aabaaaababaabbbabbabbbaabababaaaaaababaaabbabbabbabbaaaabbbbbbaabbabbbbbabababbaaabbaabbbababbb",
               substring = "bba",
          "output": 13
```
TASK:  
```
function implementStr(string, substring){
  arr = string.split("");
  arr1 = substring.split("");
  for (let i = 0; i <= arr.length - arr1.length; i++){
    if (arr.slice(i, i + arr1.length).join("") == substring){
      return i;
      }
  }
  return i;
}
console.log(implementStr("AABBACAADAABAABA","AABA"))
```
