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