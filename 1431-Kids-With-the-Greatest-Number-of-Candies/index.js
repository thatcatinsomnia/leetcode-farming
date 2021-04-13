/*
方法：
透過第一次loop將最大值找出來
第二次的loop用來比較是否等於或大於最大值

time: O(2n), space: O(n)
*/

const kidsWithCandies = function(candies, extraCandies) {
  let max = 0;

  for (let i = 0; i < candies.length; i++) {
      if (candies[i] > max) max = candies[i]
  }

  return candies.map(numOfCandies => {
      return numOfCandies + extraCandies >= max;
  });
};

module.exports = kidsWithCandies;