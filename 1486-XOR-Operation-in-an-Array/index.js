/*
方法：
依照題目意思：返回每個數＊2之後的xor運算結果
用一個for迴圈即可

time: O(n), space: O(1)
*/
const xorOperation = function(n, start) {
  let xor = 0;
  
  for (let i = 0; i < n; i++) {
    xor ^= start + 2 * i;
  }
  
  return xor;
};

module.exports = xorOperation;