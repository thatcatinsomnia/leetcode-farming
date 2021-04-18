/* 
方法：
第一個迴圈用來計算當前的奇數是多少，所以每次會加2
第二個迴圈產生兩個指針，start表示起始位置，end為結束位置，結束位置會依照當前的奇數而變動
例如： 第一層迴圈為 3 時，表示現在在找長度為三的subarray，所以start ～ end 的位移量是3，而start從0開始，所以end會是2
第三個迴圈則是透過迴圈2產生的slider window 內，所有數值的加總。
需注意的是第二個迴圈的限制條件，slider window 的結束位置不可以超出array長度範位

time: O(n^3), space: O(1)
*/
const sumOddLengthSubarrays = function(arr) {
  let len = 1;
  let sum = 0;
  while (len <= arr.length) {
      let start = 0;
      let end = len - start - 1;
      
      while (arr[end] && arr[end] + 1) {
          for (let i = start; i <= end; i++) {
              sum += arr[i];
          }
          start++;
          end++;
      }
    
      len += 2;
  }
  
  return sum;
};

module.exports = sumOddLengthSubarrays;