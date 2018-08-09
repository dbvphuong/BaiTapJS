function slice(a,b,str){
  var text = "";
  for (let i = a; i < b; i++){
    text+=str[i];
  }
  return text;
}// chứng minh hàm slice

function implementStr(string, substring){
  var x = -1;
  for (let i = 0; i <= string.length - substring.length; i++){
    if (slice(i, i + substring.length, string) === substring){
      return x = i;
    }// xét những đoạn có độ dài bằng substring trong string để so sánh.
  }

  return x;
}
console.log(implementStr("AABBACAADAABAABA","AABA"));
console.log(implementStr("bbaabbbbbaabbaabbbbbbabbbabaabbbabbabbbbababbbabbabaaababbbaabaaaba","babaaa"));
console.log(implementStr("aabaaaababaabbbabbabbbaabababaaaaaababaaabbabbabbabbaaaabbbbbbaabbabbbbbabababbaaabbaabbbababbb","bba"));
