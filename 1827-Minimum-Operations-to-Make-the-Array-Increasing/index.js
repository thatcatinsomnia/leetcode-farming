/*
方法：
array 從1開始找
每次都會拿prev出來比較
如果當前數字小於或等於前一個數字
則相減取絕對值加1(比前一個數字多1)
這樣能在sum最少的情況下，讓array變成由小到大的關係
記得將當前的數字改成計算完後的數字，
否則下一次迴圈又是和位改變前的數字比較

time: O(n), space: O(1)
*/

const minOperations = function(nums) {
  let sum = 0;
  
  for (let i = 1; i < nums.length; i++) {
      let prev = nums[i - 1];
      let current = nums[i];
      
      if (current <= prev) {
          let offset = Math.abs(current - prev) + 1;
          nums[i] += offset;
          sum += offset;
      }
  }
  
  return sum;
};

module.exports = minOperations;