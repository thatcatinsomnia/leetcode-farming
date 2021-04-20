/*
方法： 
先初始化題目要求的2為陣列
接著遍歷indices，每次迴圈將所需更動的row, col取出
並透第二層迴圈變歷matrix來將所需的位置＋1
例如row, col為 1, 0，則代表需要將在matrix[1][x]的所有位置＋1 和 matrix[y][0]的位置＋1
最後在將計算所有元素，若能整除2，則counter＋1

time: O(len * (n + n) + m * n), space: O(m * n)
*/

const oddCells = function(m, n, indices) {
  let matrix = [];
  let count = 0;
  
  // init filled arrays 
  for (let i = 0; i < m; i ++) {
      matrix.push(new Array(n).fill(0))
  }
  
  for (let indice of indices) {
    const [row, col] = indice
    
    for (let i = 0; i < m; i++) {
        matrix[i][col]++;
    }
    
    for (let j = 0; j < n; j++) {
        matrix[row][j]++;
    }
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (matrix[i][j] % 2 === 1) count++;
    }
  }
  
  return count;
};

module.exports = oddCells;