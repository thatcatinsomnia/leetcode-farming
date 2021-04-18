/*
方法：
透過loop每次比較前後兩個座標X和Y的距離
因為同時移動X及Y也算一步
所以只取XY其中最大值

time: O(n), spcae: O(1)
*/

const minTimeToVisitAllPoints = function(points) {
  let sum = 0;
  
  for (let i = 1; i < points.length; i++) {
      let current = points[i];
      let prev = points[i - 1];
      let p0 = Math.abs(current[0] - prev[0]);
      let p1 = Math.abs(current[1] - prev[1]);
      sum += Math.max(p0, p1);
  }
  
  return sum;
};

module.exports = minTimeToVisitAllPoints;