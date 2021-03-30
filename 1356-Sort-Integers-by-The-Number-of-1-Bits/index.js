// 方法：透過sort的callback方法回傳結果
// callback 會計算每個數字擁有 1 bit 的數量，如下：
// 使用迴圈，每次對該數字進行 ＆ 1 運算
// ＆ 1 運算可以得到最又邊的數字是否為 1，若為1則會得到1，為0則會是0
// 在上面的結果計算完後，對該數字進行右移（>>）運算，則可以的到下倒數第二個bit(即右移後最右邊的bit)
// time: O(n), space: o(n)

let memo = {};

const sortByBits = function(arr) {
  // memo object to hold { number: number of 1 bits }
  arr.sort((a, b) => {
    return numOfBits(a) - numOfBits(b) || a - b;
  });

  return arr;
};

function numOfBits(n) {

  // return the num if in memo object
  if (memo[n]) return n;
  
  // the variable to store number of bits
  let x = 0;

  while(n > 0) {
    // n & 1 is only 1 if the rightmost bit is 1
    x += n & 1;

    // right shift
    n >>= 1;
  }

  // put the number to memo for cache
  memo[n] = x;
  return x;
}

module.exports = sortByBits;