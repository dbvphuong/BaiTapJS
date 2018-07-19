Power Of Two Integers  

Given a positive integer which fits in a 32 bit signed integer, find if it can be expressed as A^P where P > 1 and A > 0. A and P both should be integers.  
```
Example 1:

Input: n = 4

Output: true (4 = 2 ^ 2)
```
 ```

Example 2:

Input: n = 11

Output: false

 ```
```
Example 3:

Input: n = 50074

Output: false
```
Task:  
```
function power (number){
 for(let A = 1; A <= Math.sqrt(number); A++){
    for(let P = 1; P <= A; P++){
      if(Math.pow(A, P) == number){
        console.log(A, P);
        return true;    
      }
     }
  }
  return false;
}
console.log(power (1211));
```
