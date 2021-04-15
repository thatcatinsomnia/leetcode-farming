/*
方法：
透過ruleMap將type, color, name 在每個arrary中的index記錄下來
透過ruleMap拿到index
接著用loop比較item在index位置的值是否等於ruleValue

time: O(n), space(1)
*/

const countMatches = function(items, ruleKey, ruleValue) {
  let ruleMap = {
      type: 0,
      color: 1,
      name: 2
  };

  const index = ruleMap[ruleKey];
  
  let count = 0;
  
  for (const item of items) {
      if (item[index] === ruleValue) count++;    
  }
  
  return count;
};

module.exports = countMatches;