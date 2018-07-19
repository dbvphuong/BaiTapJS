ower Of Two Integers  
Given a positive integer which fits in a 32 bit signed integer, find if it can be expressed as A^P where P > 1 and A > 0. A and P both should be integers.  
Example 1:
```
Input: n = 4
Output: true (4 = 2 ^ 2)
```
Example 2:
```
Input: n = 11
Output: false
```
 

Example 3:
```
Input: n = 50074
Output: false
```
Task:  
```
function power (number){
  if(number == 1){
    console.log(1,1);
    return true;
  }
 for(let A = 2; A <= Math.sqrt(number); A++){
    for(let P = 2; Math.pow(A, P) <= number; P++){
      if(Math.pow(A, P) == number){
        console.log(A, P);
        return true;    
      }
     }
  }
  return false;
}
console.log(power (12312415342));
```
