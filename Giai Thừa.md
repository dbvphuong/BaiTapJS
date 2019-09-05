Trailing Zeros in Factorial  
Given an integer n, return the number of trailing zeroes in n!.  
```
Example 1:  
Input: n = 5  
n! = 120  
Number of trailing zeros = 1  
Output: 1  
 ```
 ```
Example 2:  
Input: n = 100  
Output: 24  
 ```
 ```
Example 3:  
Input: n = 123456789  
Output: 30864192  
```


Task:
```
function test(a){
    var count = 0;
    while(a%5 == 0){
        a = a/5;
        count++;
    }
    return count;
}// kiểm tra 1 số xem số đó có thể tạo ra bao nhiêu số 0.

function exercise12 (number) {
    var zero = 0;
    for(let i = 5; i <= number; i+=5){
        zero+=test(i);
    }
    return zero;
}// kiểm tra từng số một rồi cộng lại ra dc bnhieu số 0.
console.log(exercise12(123456789));
```
Cách 2:  
```
function factorial(number){
  var count = 0;
  for(let i = 1; Math.pow(5,i) <= number; i++){
    for(let j = 5; j<= number; j+=5){ 
      if(j%(Math.pow(5,i)) == 0){
        count++;
      }
    }
  }
  return count;
}
console.log(factorial(123456789));
```
