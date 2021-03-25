
// 方法：
// 從陣列位置0開始
// 使用indexOf來找到相符數字的位置
// 使用loop即可從0開始，用indexOf依序找到數值的index
// 再用字串加總即可
var restoreString = function(s, indices) {
    let str = '';

    for(let i = 0; i < indices.length; i++) {
        const idx = indices.indexOf(i);
        str += s[idx];
    }

    console.log(str);
    return str;
};

restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]);