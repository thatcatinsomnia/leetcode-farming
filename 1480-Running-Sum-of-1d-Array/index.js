/*
方法：
透過loop每次將每個數字和sum加總，
最後回傳result

tims: O(n), space: O(n)
*/
const runningSum = function(nums) {
  let sum = 0;
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      result.push(sum);
  }
  
  return result;
};

module.exports = runningSum;