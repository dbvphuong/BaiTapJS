// Bài tìm mảng con có tổng giá trị lớn nhất
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
