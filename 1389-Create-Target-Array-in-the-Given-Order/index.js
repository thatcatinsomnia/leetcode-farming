/*
方法：
使用雙迴圈
第一個迴圈用來取得所有數字對應的index
若當前位置不是undefined 則直接指定數值
若為undefined，則將當前idx之後通通往後移一位，
最後在將idx位置數字指定上去。
time: O(n^2), space: O(n)
*/
const createTargetArray = function(nums, index) {
  const target = [];
    
  for (let i = 0; i < nums.length; i++) {
    const idx = index[i];
    const num = nums[i];

    if (target[idx] === undefined) {
      target[idx] = num;
    } else {
      let end = target.length;
      
      while (end > idx) {
        target[end] = target[end - 1];
        end--;
      }
      
      target[idx] = num;
    }
  }
  
  return target;
};

module.exports = createTargetArray;