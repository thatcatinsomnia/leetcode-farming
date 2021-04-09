/*
方法：
首先要知道構成三角形條件：兩遍合大於第三邊，兩邊差小於第三邊
題目要最大的周長
所以先將array由大到小排序後
每次回圈拿三個元素來判斷是否為三角形
第一組符合即為答案，因為排序後大的數字會在前面
*/


const largestPerimeter = function(nums) {
  nums.sort((a, b) => b - a);
    
  let index = 0;
  while (index < nums.length) {
    const first = nums[index];
    const second = nums[index + 1];
    const third = nums[index + 2];
    
    if (isTriangle(first, second, third)) {
      return first + second + third;
    } else {
      index++;
    }
  }
  
  return 0;
};

const isTriangle = (first, second, third) => {
  return (first + second > third) && (first - second < third); 
};

module.exports = largestPerimeter;