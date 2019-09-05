Cho một danh sách các số nguyên tên là arr. Có tồn tại một chỉ số i (0 <= i < arr.length-1) mà arr[0] + arr[1] + ... + arr[i] = arr[i+1] + arr[i+2] + ... arr[arr.length()-1]

Ví dụ:

Với arr = [1,2,3] thì kết quả isTwoSameSequences(arr) = true

Dễ dàng nhận thấy 1+2=3
Với arr = [1,2,4] thì kết quả isTwoSameSequences(arr) = false

Không tìm được cách chia mảng arr thành 2 phần có tổng bằng nhau như yêu cầu
Đầu vào/Đầu ra:

[Thời gian chạy] 0.2 giây với C++, 1.2 giây với C# và Java, 1.6 giây với Python và JavaScript
[Đầu vào] array.integer arr
Mảng các số nguyên 
1 <= arr.length() <= 1000
-10000 <= arr[i] <= 10000
[Đầu ra] bool
Trả về true nếu tồn tại chỉ số i thoả mãn yêu cầu, false nếu ngược lại




Bài làm:
function isTwoSameSequences(arr){
    var a = false
    sum = (a,b)=>a+b;
    for(i=1;i<arr.length;i++){
        if(arr.slice(0,i).reduce(sum) == arr.slice(i).reduce(sum)){
            a = true;
            break;
        }
    }
    return a;
}
