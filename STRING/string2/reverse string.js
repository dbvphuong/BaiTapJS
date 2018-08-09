function reverseString (str){
  var arr = str.split(" ");
  var arr1 = [];
  for (let i = arr.length - 1; i >= 0; i--){
    if (arr[i] !== "") {
      arr1.push(arr[i]);
    }
  }
  arr1 = arr1.join(" ");
  return arr1;
}
console.log( reverseString ("the sky is   blue"));
