/*
方法：
先用雙迴圈將座標全部push到array中
接著在依照distance來排序
tim: O(n^2), space: O(n)
*/

const allCellsDistOrder = function(R, C, r0, c0) {
  let result = [];
  for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
          result.push([i, j]);
      }
   }
  
  result.sort((a, b) => distance(a, r0, c0) - distance(b, r0, c0));
  
  return result;
};

const distance = (cord, r0, c0) => {
  return Math.abs(cord[0] - r0) + Math.abs(cord[1] - c0);
}

module.exports = allCellsDistOrder;