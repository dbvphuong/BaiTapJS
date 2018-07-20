Given a column title as appears in an Excel sheet, return its corresponding column number.  
```
Example:
  A -> 1
  B -> 2 
  C -> 3 
  ...

  Z -> 26 
  AA -> 27 
  AB -> 28
  ABC -> 731
  AAAA -> 18279
  ```
  
  Task:  
  ```
  function exel (letter){
  var sum = 0;
  var obj = {A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9, J:10, K:11, L:12, M:13, N:14, O:15, P:16, Q:17, R:18, S:19, T:20, U:21, V:22, W:23, X:24, Y:25, Z:26}
  var arr = letter.split("");
  for(let i = 0; i < arr.length; i++){
    sum += (obj[arr[i]]) * Math.pow(26,(arr.length - 1 - i))
  } // sẽ là 1.26^2 + 2.26^1 + 3.26^0
  return sum;
}
console.log(exel ('ABC'));
  ```
