bài toán số đường đi con robot tìm đường đi từ điểm đầu đến cuối(chỉ đi phải hoặc xuống)  
Task
```
function uniquePaths (bottom, right){
  var n = (bottom - 1) + (right - 1); // số bước đi của robot luôn luôn không đổi băng n
  var b = 1;
  var r = 1;
  var m = 1;
  for( let i = 1; i < bottom; i++){
    b *=i
  }
  for( let i = 1; i < right; i++){
    r *=i
  }
  for( let i = 1; i <= n; i++){
    m *=i
  }
  var sum = m/(b*r); // chính là tổ hợp b hoặc r của n.(vì b+r = n).
  return sum;
}
console.log(uniquePaths(15,9));
```
Cách 2: đệ qui.  
```
function uniquePaths (i,j){
    if(i == 1 || j == 1){
        return 1;
    }
    var a =  uniquePaths(i-1 ,j) + uniquePaths(i , j- 1); 
// số cách đến vị trí (i,j) = số cách đến vị trí (i-1,j) + số cách đến vị trí(i,j-1)
    return a;
}
console.log(uniquePaths(1,9));
```
