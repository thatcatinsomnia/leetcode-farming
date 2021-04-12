/*
方法：
此題和第一代大致相同
唯一不同在於，重複的數字也必須回傳
所以這邊使用map將nums1所有出現的數字存下來
在用loop抓取出現在nums2中的數字，若也出現在lookup中
則將該數字push到result
需注意的是，若lookup中的數字若已經是0了，這時nums2中又出現，需跳過因為nums1出現的次數已經不夠扣了

time: O(m + n), space: O(n);
*/
const intersect = function(nums1, nums2) {
  const lookup = {};
  const result = [];
  
  for (const num of nums1) {
    const exist = lookup[num] || 0;
    lookup[num] = exist + 1;
  }
  
  for (const num of nums2) {
    const exist = lookup[num];
    
    if (exist && exist > 0) {
        lookup[num] = exist - 1;
        result.push(num);
    }
  }
  
  return result;
};

module.exports = intersect;