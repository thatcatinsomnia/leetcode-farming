// 方法：
// 透過大小為26的 array 紀錄每個字母出現次數
// 將char 轉為ascii, a 為 97
// 接著從左到又遍歷 array 即可從小到大
// 到最右邊之後，在從右到左

var sortString = function(s) {
  let result = '';
  let count = s.length; 
  const frequency = new Array(26).fill(0);

  for (let i = 0; i < count; i++) {
    frequency[s.charCodeAt(i) - 97]++;
  }

  while (count > 0) {
    for (let i = 0; i < frequency.length; i++) {
      if (frequency[i] > 0) {
        result += String.fromCharCode(i + 97);
        frequency[i]--;
        count--;
      }
    }

    for (let i = frequency.length - 1; i >= 0; i--) {
      if (frequency[i] > 0) { 
        result += String.fromCharCode(i + 97);
        frequency[i]--;
        count--;
      }
    }
  }
  return result;
};
sortString('aaaabbbbcccc');