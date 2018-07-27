You have to paint N boards of length {A0, A1, A2, A3 … AN-1}. There are K painters available and you are also given how much time a painter takes to paint 1 unit of board. You have to get this job done as soon as possible under the constraints that any painter will only paint contiguous sections of board.

2 painters cannot share a board to paint. That is to say, a board
cannot be painted partially by one painter, and partially by another.
A painter will only paint contiguous boards. Which means a
configuration where painter 1 paints board 1 and 3 but not 2 is
invalid.
Return the answer % 10000003

Input :
```
K : Number of painters
T : Time taken by painter to paint 1 unit of board
L : A List which will represent length of each board
```
Output:
     return minimum time to paint all boards % 10000003 

Example 1
```
Input :
  K : 2
  T : 5
  L : [1, 10]
Output : 50
```
Example 2
```
Input :
  K : 2
  T : 3
  L : [4, 2, 5, 1, 3]

Output : 27
```

Example 3
```
Input :
  K : 1
  T : 1000000
  L : [1000000, 1000000]
Output : 9400003
```

Hints: Bài này cần suy nghĩ theo hướng Binary Search.

Gọi hàm check là countPainter(t) => trả về số lượng painter cần thiết để vẽ hết bảng trong thời gian t

Cần tìm xem thời gian tối thiểu để vẽ là gì ? thời gian tối đa để vẽ là bao nhiêu và sử dụng binary search trong đoạn đó:

Nếu như countPainter (mid) < số lượng painter ta có thì cần làm gì

Nếu như countPainter(mid) >= sô lượng paitner ta cần làm gì. Etc
