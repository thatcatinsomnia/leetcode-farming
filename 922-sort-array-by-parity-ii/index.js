// 方法二
// 想法類似方法一
// 但是直接使用原array進行交換位置，以節省空間
// 從左到右遍歷array
// 但這次每次都 +2 代表偶數index
// 透過額外的pointer j，來代表奇數位置
// 當在位置i檢查到奇數時
// 開始檢查j的位置，檢查第一個不是偶數的數字
// 接著將i, j 位置互換，進行下一輪迴圈
// Time: O(n), Space: O(1)
function sortArrayByParityII(nums) {
  let j = 1;
  let n = nums.length;

  for (let i = 0; i < n; i += 2) {
    if (nums[i] % 2 === 1) {
      while (nums[j] % 2 === 1 && j < nums.length) {
        j += 2;
      }

      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
  }

  return nums;
}


// 方法一：
// 新增 odd, even, result 來存放變數
// 從左到右遍歷 array
// 判斷當前的數字是奇數或偶數
// 將當前數字存入result[odd]
// 再將odd += 2
// 若為偶數
// 則存入result[even]
// 並將even += 2
// 當迴圈跑完時將result返回
// Time: O(n), Space: O(n)
// function sortArrayByParityII(nums) {
//   let odd = 1;
//   let even = 0;
//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       result[even] = nums[i];
//       even += 2;
//     } else {
//       result[odd] = nums[i];
//       odd += 2;
//     }
//   }

//   return result;
// }

module.exports = sortArrayByParityII;