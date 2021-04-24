/*
方法：
使用雙層迴圈
第二層有兩個迴圈
先透過雙pointer方式將array左右位置互換
再將數字1變0 0變1

time: O(n^2), spcae: O(1)
*/

var flipAndInvertImage = function(image) {
  for (let img of image) {
      let left = 0;
      let right = img.length - 1;
      
      while (left < right) {
          const tmp = img[left];
          img[left] = img[right];
          img[right] = tmp;
          
          left++;
          right--;
      }
      
      for (let i = 0; i < img.length; i++) {
          img[i] = img[i] === 1 ? 0 : 1;
      }
  }
  
  return image;
};

module.exports = flipAndInvertImage;