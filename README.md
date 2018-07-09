# Bai6
### bai ma tran vuong
Anti Diagonals  
Give a N*N square matrix, return an array of its anti-diagonals. Look at the example for more details.  
Example:  
nput 1:      
```
[
  [1, 2, 3]

  [4, 5, 6]

  [7, 8, 9]
]
```
Return the following :  
```
[
  [1],
  [2, 4],
  [3, 5, 7],
  [6, 8],
  [9]
]
```

bai lam:  
```
var n=6;
var arr1 = [];
var arr2 = []
for(var a = 1; a<=n; a++){
    arr1.push(new Array(a).fill(1));
}
for(let i=0; i<n; i++){
    for(let j = 0; j< arr1[i].length; j++){
        if(i != 0 && j ==0 ){
            arr1[i][j]= arr1[i-1][j] +1;
        }
        else if(j != 0){
            arr1[i][j] = arr1[i][j-1] + n-1;
        }
    }
}

for(let a = n-1; a>0; a--){
    arr2.push(new Array(a).fill(1));
}
for(let i = 0; i< n-1; i++){
    for(let j =0; j< arr2[i].length; j++){
        if(i==0 && j==0){
            arr2[i][j] = n*2;
        }
        else if(j==0 && i!=0){
            arr2[i][j] = arr2[i-1][j] + n;
        }
        else if(j!=0){
            arr2[i][j] = arr2[i][j-1] + n-1;
        }
    }
}
var arr = arr1.concat(arr2); // ghep arr1 voi arr2
console.log(arr);
```
