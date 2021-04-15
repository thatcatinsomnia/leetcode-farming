/*
方法：
透過雙迴圈來將結果push到result中
第一個迴圈從頭開始每次跳2
第二個迴圈從nums[i]開始，代表某個數的出現次數，所以要跑nums[i]次迴圈
上面提到的某個數就是nums[i+1],
因為是兩兩唯一組，第一個出現的數為頻率，第二個數為value
example: [1, 2, 9, 3]，則表示2會出現1次，3會出現9次

time: O(n^2/2), space: O(n)
*/
const decompressRLElist = function(nums) {
  const result = [];
  
  for (let i = 0; i < nums.length; i+=2) {
      const value = i + 1;
      
      let count = nums[i];
      while (count > 0) {
          result.push(nums[i+1]);
          count--;
      }
  }
  
  return result;
};

module.exports = decompressRLElist;