function findNumber(arr){
    let i = 0;
    let j = 1;
    while (i < arr.length){
        if ((arr[i]^arr[j]) == 0){
            arr.splice(j,1);
            i++;
            j = i + 1;
        }
        else {
            if (j == arr.length){
                return arr[i];
            }
            j++;
        }
    }
    return arr[i];
}
console.log(findNumber([1,2,2,3,1]))
