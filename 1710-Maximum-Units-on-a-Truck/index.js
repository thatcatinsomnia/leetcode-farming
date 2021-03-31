/* 題目意思：
boxTypes 為一個二為陣列
陣列中第一個數值為該種類box數量
第二個數值為該種類box能裝的單位
例如：[5, 4] 代表有該種類有五個箱子，每個箱子能裝4個單位，總共能裝20單位
而truckSize 為該次能裝的箱子個數上限（不分箱子種類）
題目要求回傳，能裝滿truckSize的最大單位是多少

解法： 
將箱子的單位數量，依照遞減排序
使用迴圈依序取箱子
edge case: 當truckSize小於numOfBoxes時，會計算最後一次的結果。

time: O(nlogn), O(1)
*/
const maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  
  let total = 0;

  for (let [numOfBoxes, unit] of boxTypes) {
    if (truckSize < numOfBoxes) {
      total += truckSize * unit;
      break;
    }

    total += numOfBoxes * unit;
    truckSize -= numOfBoxes;
  }

  return total;
};

module.exports = maximumUnits;