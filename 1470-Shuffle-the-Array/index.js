/*
方法：
透過兩個pointer，第一個指向array開頭，第二個指向n開始
依序往後loop，每次loop都將結果依序push到result中

time: O(n), space: O(n)
*/

const shuffle = function(nums, n) {
  let result = [];
  let j = n;
  for (let i = 0; i < nums.length - n; i++) {
      result.push(nums[i]);
      result.push(nums[j]);
      
      j++;
  }
  
  return result;
};

module.exports = shuffle;