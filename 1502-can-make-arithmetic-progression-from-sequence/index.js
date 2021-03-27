// 方法：
// 將 array 排序後
// 取第一位和第二位的差
// 接著用forloop 比較前後兩位和上面取的得是否相同
// time: O(n), space: O(n)
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a - b);

    let different = arr[1] - arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== different) {
            return false;
        }
    }

    return true;
};

module.exports = canMakeArithmeticProgression;
