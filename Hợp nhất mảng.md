// Hợp nhất mảng
// Dữ liệu 1: [[1,3], [2,6], [8,10], [15,18]]
// Kết quả 1: [[1,6], [8,10], [15,18]]

```
arr = [[1,13],  [8,10], [2,6],[15,18]];
var shift = 0;
arr.sort(function(a,b){
    return a[0]-b[0];
})
// sắp xếp mảng arr
for(let i = 0; i<arr.length-1; i++){
    if(arr[i][1] > arr[i+1][0] && arr[i][1] < arr[i+1][1]){
        arr[i]=[arr[i][0], arr[i+1][1]];
        arr[i+1]=[arr[i][0], arr[i+1][1]];
    }
    else if(arr[i][1] > arr[i+1][0] && arr[i][1] > arr[i+1][1]){
        arr[i]=[arr[i][0], arr[i][1]];
        arr[i+1]=[arr[i][0], arr[i][1]];
        
    }       
    shift++;// bang 3 lan
    console.log(shift);
}
for(let i =1; i<shift;i++ ){
    arr.shift();
 }
 // xóa đi các phần tử bị lặp shift lần
console.log(arr);
```
