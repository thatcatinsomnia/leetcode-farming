/*
方法：
透過迴圈計算每個海拔高度（altitude)，並回傳最大值

time: O(n), space(1)
*/

var largestAltitude = function(gain) {
  let altitude = 0;
  let max = 0;
  for (let g of gain) {
    altitude += g;
    if (altitude > max) {
        max = altitude;
    }
  }
  
  return max;
};

module.exports = largestAltitude;