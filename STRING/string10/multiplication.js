// Hàm tính tổng 2 số nhị phân
function sum(a,b){
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

// Hàm nhân 2 số nhị phân
function mid (x,y){
    x = x.toString(2);
    y = y.toString(2);
    let i = 0;
    let note0 = '';
    let note1 = '';
    let plus = '';
    let decimal = 0;
    while (i < y.length){
        if (y[i] == 0){
            note0 = plus;
            note1 = new Array(x.length).fill(0).join('');
            plus = sum(note0, note1);
            i++;
        }
        else {
            note0 = plus;
            note1 = x + new Array(y.length - 1 - i).fill(0).join('');
            plus = sum(note0, note1);
            i++;
        }
    }

    // Chuyển nhị phân sang thập phân
    for (let i = 0; i < plus.length; i++){
        if (plus[i] == 1){
            decimal += Math.pow(2, (plus.length - i - 1));
        }
    }
    return decimal;
}

//Hàm chia 2 số nhị phân
function multiplication (u,v){
    let i = 0;
    for (i = 0; i < u ; i++){
        if (mid(v,i) <= u && mid(v,(i+1)) > u){
            return i;
        }
    }
    return i;
}
console.log(multiplication(15,4));
console.log(multiplication(5,2));
console.log(multiplication(27,3));
