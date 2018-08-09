
function palinDrome (str){
  var str = str.toLowerCase();
  var arr = str.split("");
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === "," || arr[i] === ":" || arr[i] === " "){
      arr[i] = undefined;
    }
  }
// Bỏ dấu , : cách đi.
  arr = arr.join("").split("");
  var arr1 = arr.slice();
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr1[arr.length - 1 - i]
  }
  
  if (arr.join() ===  arr1.join()){
    return "String is a palindrome"
  }
  else 
  return "String is not a palindrome";
}
console.log(palinDrome("race a car"));
console.log(palinDrome("A man, a plan, a canal: Panama"));

    if (arr[i] !== "") {
      arr1.push(arr[i]);
    }
  }
  arr1 = arr1.join(" ");
  return arr1;
}
console.log( reverseString ("the sky is   blue"));

