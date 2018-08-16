function binaryString(a,b){
    var a = a.toString().split('');
    var b = b.toString().split('');
    var minus = a.length - b.length;
    var arr;
    if (minus > 0){
        arr = new Array(minus + 1).fill(0);
        a.unshift("0");
        for (let i = 0; i < arr.length ; i++){
            b.unshift(arr[i]);
        }
    }
    else {
        arr = new Array(- minus + 1).fill(0);
        b.unshift("0");
        for (let i = 0; i < arr.length ; i++){
            a.unshift(arr[i]);
        }
    }
    let i = a.length - 1;
    let j = a.length - 1;
    let note = 0;
    var plus = new Array(a.length).fill(0);
    while (i >= 0){
        if (a[i] == 0 && b[i] == 0){
            plus[i] = note;
            note = 0;
            i--
        }
        else if (a[i] == 1 && b[i] == 1){
            plus[i] = note;
            note = 1;
            i--
        }
        else if (a[i] != b[i] && note == 0){
            plus[i] = 1;
            note = 0;
            i--
        }
        else if (a[i] != b[i] && note == 1){
            plus[i] = 0;
            note = 1;
            i--
        }
    }
    
    if (plus[0] == 0){
        plus.shift();
    }
    plus = plus.join('');
    return plus;
}
console.log(binaryString('100','11'));
console.log(binaryString('1010110111001101101000','1000011011000000111100110'));
