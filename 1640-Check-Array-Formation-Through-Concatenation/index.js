/*
方法：
透過lookup將pieces中的arr存起來
key值是每個array中的第一個元素

接著使用while迴圈查找arr
依序找arr[index]是否存在lookup中, 若不存在則直接return false
若有存在的話，將piece中的元素全部push到res中，之後index加上piece的長度，因為arr之後的n個元素都是從piece中push來的，所以跳過push的數量
最後將res和arr轉換成字串後比較

time: O(n), space: O(n)
*/

const canFormArray = (arr, pieces) => {
  const lookup = {};

  for (const piece of pieces) {
    const first = piece[0];
    lookup[first] = piece; 
  }

  let index = 0;
  let res = [];

  while (index < arr.length) {
    let num = arr[index];
    const piece = lookup[num];

    if (!piece) return false;

    res.push(...piece);

    index += piece.length;
  }

  return res.join() === arr.join();
};

module.exports = canFormArray;