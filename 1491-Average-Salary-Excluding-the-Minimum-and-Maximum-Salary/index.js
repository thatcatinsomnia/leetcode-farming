/*
方法二:
不使用排序法
直接使用變數紀錄最大和最小
最後將結果扣除最大和最小
time: O(n), space: O(n)
*/
const average = function(salary) {
  let sum = 0;
  let max = salary[0];
  let min = salary[0];

  for (let i = 0; i < salary.length; i++) {
    if (salary[i] > max) max = salary[i];
    if (min > salary[i]) min = salary[i];
    sum += salary[i];
  }

  return (sum - max - min) / (salary.length - 2)
};

/*
方法一:
將salary排序後
跳過頭尾即可以將最大和最小過濾掉
time: O(nlogn), space: O(1)
*/

// const average = function(salary) {
//   salary.sort((a, b) => a - b);
  
//   let sum = 0;
//   for (let i = 1; i < salary.length - 1 ; i++) {
//       sum += salary[i];
//   }
  
//   return sum / (salary.length - 2)
// };

module.exports = average;