// Bài tìm mảng con có tổng giá trị lớn nhất
Task:  
```
function maxSum (arr){
  var max = [-2];
  for(let i = 1; i < arr.length; i++){
    
    if(arr[i] >= (max[i-1] + arr[i])){
      max.push(arr[i]);
    } // Nếu số sau lớn hơn tổng chính nó cộng với số đằng trước nó thì max[] sẽ nhận chính số đó.
    
    else {
      max.push((max[i-1] + arr[i]));
    } // Nếu số sau lớn hơn tổng chính nó cộng với số đằng trước nó thì max[] sẽ nhận tổng 2 số kia.
  }
  console.log(max);
  return Math.max(...max);
}
console.log(maxSum([-2,1,-3,4,-1,2,1,-5,4]));

```
 Cách 2:  
```
var arr = [-2,1,-3,4,-1,2,1,-5,4];
var arr1 = [];
var max = 0;
for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j <= arr.length; j++){
        arr1.push(arr.slice(i,j).reduce((a,b) => a+b));// arr1 gốm các phần tử là tổng các mảng con
        max =  arr1.reduce((x,y) => Math.max(x,y));
    }
}
console.log(max);
```
