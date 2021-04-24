/*
方法：
透過迴圈將每個數字轉成string並判斷長度是否整除2

time: O(n), spcae: O(1)
*/

var findNumbers = function(nums) {
  let sum = 0;
  for (let num of nums) {
      if (num.toString().length % 2 === 0) {
          sum += 1;
      }
  }
  
  return sum;
};

module.exports = findNumbers;