const test = require('./diagonalLine');

function paypaliShiring (str,n) {
    var arr = str.split('');
    var arr1 = [];
    for (let i = 0; i < n; i++){
        arr1.push(new Array(arr.length).fill(''))
    }// tạo arr1 hình ma trận.
    test(arr, arr1, 0, 0, n);
    test(arr, arr1, 0, n - 1, n);
    arr1 = arr1.join('').replace(/,/g,'');
    return arr1;
}
console.log(paypaliShiring("PAYPALISHIRING",3));
console.log(paypaliShiring("ABCD",2));
