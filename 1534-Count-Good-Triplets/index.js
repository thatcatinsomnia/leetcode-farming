/*
方法：透過三個迴圈
每個迴圈起始皆是前一個迴圈index + 1，
如此一來，就可以loop所有元素，
接著依照題目條件進行判斷即可

time: O(n^3), space: O(1)
*/

const countGoodTriplets = function(arr, a, b, c) {
  const len = arr.length;
  let result = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (Math.abs(arr[i] - arr[j]) > a) continue;

      for (let k = j + 1; k < len; k++) {
        if (Math.abs(arr[j] - arr[k]) > b) continue;
        
        if(Math.abs(arr[i] - arr[k]) <= c) result++;
      }
    }
  }
  
  return result;
};

module.exports = countGoodTriplets;