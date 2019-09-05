Tính phần nguyên của căn bậc 2 của 1 số nguyên dương(sdung binary seach).  
```
function sqrt (number){
  var min = 0;
  var max = number;
  var mid = Math.floor((min + max)/2);;
  while (min < mid){
    mid = Math.floor((min + max)/2);
    if (mid*mid < number){
      min = mid;
      mid = Math.floor((min + max)/2);
    }

    else if (mid*mid > number){
      max = mid;
      mid = Math.floor((min + max)/2);
    }

    else
      return mid;
  }
  return mid;
}
console.log(sqrt(9));
```
