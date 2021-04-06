/*
方法：
透過set將nums1元素存起來
接著查找nums2元素也出現在lookup中的元素，並將之push到result
time: O(m + n), space: O(n)
*/

const intersection = function(nums1, nums2) {
  let lookup = new Set();
  const result = [];
  
  for (let n of nums1) {
    lookup.add(n);
  }

  for (let n of nums2) {
    if (lookup.has(n)) {
      result.push(n);
      lookup.delete(n);    
    }
  }

  return result;
};

module.exports = intersection;