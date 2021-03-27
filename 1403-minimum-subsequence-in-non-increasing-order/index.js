// time: O(nlogn) 排序花費
// space: O(1) or O(n)
// 方法：從最大的數字開始找
// 先將 array 排序
// 在從大的數字開始找
// 和剩下的數字作比較
var minSubsequence = function(nums) {
    const result = [];
    
    let sum = 0;
    for (let n of nums) {
      sum += n;
    }
    
    nums.sort((a, b) => b - a);
    
    let current = 0;
    for (let i = 0; i < nums.length; i++) {
      current += nums[i];
      result.push(nums[i]);

      if (current > sum - current) break;
    }
    
    return result;
};

module.exports = minSubsequence;