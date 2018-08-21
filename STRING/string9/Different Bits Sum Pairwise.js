function sumBits (arr) {
    let arr1 = [];
    let i = 0;
    let j = 0;
    let zero = 0;
    let one = 0;
    let count = 0;
    for (let i = 0; i < arr.length ; i++){
        let x = arr[i];
        arr1.push(x.toString(2));
    }// chuyển sang nhị phân
    const max = arr1[arr1.length - 1].length;
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i].length < max){
            arr1[i] = new Array(max - arr1[i].length).fill(0).join('') + arr1[i]
        }
    }// chuyển sang cân bằng về phần tử [ '0000', '0100', '0111', '1001' ]

    while (j < arr1[0].length){
        if (i == arr1.length){
            count = count + zero*one;
            zero = 0;
            one = 0;
            i = 0;
            j++;
        }
        else if (arr1[i][j] == 0){
            zero++;
            i++;
        }
        else if (arr1[i][j] == 1){
            one++;
            i++;
        }
    }// xét hàng dọc thì count = số chữ số 0 nhân với số chữ số 1, rồi cộng các count hàng dọc lại

    return count*2;
}
console.log(sumBits([1,3,5]));
console.log(sumBits([0,4,7,9]));
