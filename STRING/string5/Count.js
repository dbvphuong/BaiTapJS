function count (str,n){
    let arr = str.split("");
    let arr1 = [];
    let i = 0;
    let j = 1;
    let count = 1;
    while (j <= arr.length + 1 && count < n){
        if (arr[i] !== arr[i+1]){
            arr1.push('1', arr[i]);
            i+=1;
            j+=1;
            if(j ==arr.length + 1){
                i = 0;
                j = 0;
                arr = arr1.slice();
                arr1 = [];
                count++;
            }
        }
/*
nếu số arr[i]=arr[i+1] thì thêm arr[i] vào arr1,
nếu số arr[i] là số cuối thì count cộng 1 và bắt đầu lại vòng while
*/
        else if (arr[i] === arr[i+1] && arr[i] === arr[j]){
            j+=1;
        }
// nếu 2 số liền kề bằng nhau thì j tăng 1.
        else if (arr[i] === arr[i+1] && arr[i] !== arr[j]){
            arr1.push(arr.slice(i,j).length, arr[i]);
            i+=(j-i);
            j+=1;
            if (j == arr.length + 1){
                i = 0;
                j = 1;
                arr = arr1.slice();
                arr1 = [];
                count++;
            } 
        }
/*
thêm 1 mảng có các số bằng nhau liền kề vào arr1,
nếu mảng đó kết thúc arr thì count cộng 1 và bắt đầu lại vòng while
*/
    }

    return arr.join("");
}
console.log(count('1',2));
console.log(count('1',3));
console.log(count('1',4));
console.log(count('1',5));
console.log(count('1',6));
