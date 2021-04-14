/*
方法：
依題意找主每個subarray元素中，總和最大值
透過雙迴圈來紀錄總和值，並和max比較

time: O(n^2), space: O(1)
*/


const maximumWealth = function(accounts) {
  let max = 0;
  
  for (const acc of accounts) {
      let sum = 0;
      acc.map(x => sum += x);
      if (sum >= max) max = sum;
  }
  
  return max;
};

module.exports = maximumWealth;