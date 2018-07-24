bài toán số đường đi con robot tìm đường đi từ điểm đầu đến cuối(chỉ đi phải hoặc xuống)  
# Cách 1:  
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
# Cách 2: đệ qui.  
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

# Cách 3: qui hoạch động  
```
// qui hoạch động
function uniquePaths (bottom, right){
    var arr = [];
    for(let a = 0; a < bottom; a++){
        arr.push(new Array(right).fill(1))
    }
    for(let i = 0; i < right; i++){
        for(let j = 0; j < bottom; j++){
            if(i == 0 || j == 0){
                arr[i][j] = 1;
            }
            else
             var sum = arr[i][j] = arr[i-1][j] + arr[i][j-1];
        }
    }
    return sum;
}
console.log(uniquePaths(15,9));
```
