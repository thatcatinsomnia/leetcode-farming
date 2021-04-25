/*
方法：
透過迴圈 同時將 main 和 secondary 找出來
若 mat 長度為奇數時，需額外扣除中心點
依題目可以找到以下規則：

len = 3
main = [0,0], [1, 1], [2, 2]
secondary = [0, 2], [1, 1], [2, 0]

len = 4
main = [0,0], [1, 1], [2, 2], [3, 3]
secondary = [0, 3], [1, 2], [2, 1], [3, 

len = 5
main = [0, 0], [1, 1], [2, 2], [3, 3], [4, 4]
secondary = [0, 4], [1, 3], [2, 2], [3, 1], [4, 0]

由上面規則可以知道： 
1 main 在取值時 [i, j] 中的 i === j，也就是等於[i, i]
2. seconday 在取值時 [i, j]，i 會從0開始，而j會從len - 1開始，下次迴圈時i會+1，j會-1
3. main 和 secondary 長度相等，且個數為 len 個
再將上述兩項轉化成程式碼
edge case: 當 mat 長度為1時，直接反回第一個array，即index = 0;

time: O(n), space: O(1)
*/

var diagonalSum = function(mat) {
  const len = mat.length;
  const center = len % 2 === 1 ? ( len - 1) / 2 : null;
  
  if (len === 1) return mat[0][0];
  
  let main = 0;
  let secondary = 0;
  
  let secX = 0;
  let secY = len - 1;
  for (let i = 0; i < len; i++) {
      main += mat[i][i];
      secondary += mat[secX][secY];
      secX++;
      secY--;
  }
  
  let total = main + secondary;
  
  return center ? total - mat[center][center] : total;
};

module.exports = diagonalSum;