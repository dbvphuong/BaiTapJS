function binaryString(a,b){
    let minus = a.length - b.length;
    let str = '0';
    let note = 0;
    let plus = '';

    if (minus > 0){
        for (let i = 0; i < minus ; i++){
            str = '0' + str;
        }
        b = str + b;
        a = '0' + a;
    }
    else if (minus < 0){
        for (let i = 0; i < -minus ; i++){
            str = '0' + str;
        }
        a = str + a;
        b = '0' + b;
    }
    else {
        a = '0' + a;
        b = '0' + b;
    }// Tạo string a,b trên cơ sở a,b cũ có chiều dài bằng nhau

    let i = a.length - 1;
    while (i >= 0){
        if (a[i] == 0 && b[i] == 0){
            plus = note + plus;
            note = 0;
            i--
        }
        else if (a[i] == 1 && b[i] == 1){
            plus = note + plus;
            note = 1;
            i--
        }
        else if (a[i] != b[i] && note == 0){
            plus = '1' + plus;
            note = 0;
            i--
        }
        else if (a[i] != b[i] && note == 1){
            plus = '0' + plus;
            note = 1;
            i--
        }
    }
    if (plus[0] == '0'){
        plus = plus.substr(1);
    }
    return plus;
}
console.log(binaryString('100','11'));
console.log(binaryString('1010110111001101101000','1000011011000000111100110'));
