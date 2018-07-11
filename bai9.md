// Input [11, 8, 7, 9, 2, 10, 2]  
// Output [2, 2, 8, 7, 10, 9, 11]  
```
var arr = [11, 8, 7, 9, 2, 10, 2];
arr.sort(function (a,b){
   return a-b
});
for(let i = 0; i<arr.length-1; i+=2){
    var x = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = x;
}

console.log(arr);
```
