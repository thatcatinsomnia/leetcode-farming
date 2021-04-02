/*
方法： 
將所有出現在arr2中的數字紀錄下來
從arr1中計算已經存在的數字的"出現次數"
若數字不存在則放到rest中
透過arr2將已經存在的數字全部push到result中
若數字出現多次，則push到次數規0
最後將result 和 排序後的rest 進行concat
time: O(n^2), space: O(n)
*/
const relativeSortArray = (arr1, arr2) => {
  const countMap = {};
  const result = [];
  const rest = [];

  for (let num of arr2) {
    countMap[num] = 0;
  }

  for (const num of arr1) {
    if (countMap[num] >= 0) {
      countMap[num]++;
    } else {
      rest.push(num);
    }        
  }

  for (const num of arr2) {
    for (let i = 0; i < countMap[num]; i++) {
      result.push(num);
    }
  }

  return result.concat(rest.sort((a, b) => a - b));
};

module.exports = relativeSortArray;