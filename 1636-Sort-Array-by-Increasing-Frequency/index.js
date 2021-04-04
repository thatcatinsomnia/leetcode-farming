/*
方法：
透過額外的object紀錄每個數字出現次數
接著使用sort方法
依照數字出現次數做遞增排序
edge case: 當兩數字出現次數相同時，數字較大放前面
time: O(nlogn), space: O(n)
*/

const frequencySort = function(nums) {
  const countMap = {};

  for (num of nums) {
    countMap[num] = countMap[num] + 1 || 1;
  }

  nums.sort((a, b) => {
    if (countMap[a] === countMap[b]) {
      return b - a;
    }
    
    return countMap[a] - countMap[b];
  });

  return nums;
};

module.exports = frequencySort;