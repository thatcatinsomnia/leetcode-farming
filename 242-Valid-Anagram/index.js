/*
方法：
透過排序 或 array 來解
排序： 將兩個排序後的string比較是否相等
array: 記住每個字母的出現次數，在比較兩邊的字母出現次數是否相等
time: O(n), space: O(1)
*/

const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  
  const arr = new Array(26).fill(0);
  
  for (let i = 0; i < s.length; i++) {
    const position = s[i].charCodeAt() - 97;
    arr[position] = (arr[position] + 1) || 1;
  }
  
  for (let i = 0; i < t.length; i++) {
    const position = t[i].charCodeAt() - 97;
    if (arr[position] > 0) {
        arr[position] = arr[position] - 1
    } else {
        return false;
    }
  }
  
  for (num of arr) {
    if (num > 0) return false;
  }
  
  return true;
};

module.exports = isAnagram;