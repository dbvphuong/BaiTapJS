function zigzag (arr,arr1,i,j,n) {

    while (i < n && j < arr.length){
   
        if (Math.floor(j/(n-1))%2 === 0){
            arr1[i][j] = arr[j];
            i++;
            j++;
            if (i == n-1){
                j+=n-1;
                i = 0;
            }
        }// Tạo ra hàng chéo từ trên xuống dưới.
        else if(Math.floor(j/(n-1))%2 !== 0){
            arr1[n-1-i][j] = arr[j];
            i++;
            j++;
            if ((n-1-i) == 0){
                j+=n-1;
                i = 0;
            }
        }// tạo ra hằng chéo từ dưới lên trên.
    }
    return arr1;
}

module.exports = zigzag;
