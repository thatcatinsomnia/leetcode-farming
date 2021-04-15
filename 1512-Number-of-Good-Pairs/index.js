/*
方法：
題目限制i必須小於j
所以使用雙迴圈往後找即可

time: O(n^2), space: O(1)
*/

const numIdenticalPairs = function(nums) {
  let count = 0;

  for(let i = 0; i < nums.length; i++) {
      let j = i + 1;
      
      while (j < nums.length) {
          if (nums[i] === nums[j]) {
              count++;
          }
          
          j++;
      }
  }
  
  return count;
};

module.exports = numIdenticalPairs;