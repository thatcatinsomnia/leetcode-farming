const countMatches = require('./index');

it('Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],\
    ruleKey = "color", \
    ruleValue = "silver",Output: 1', () => {
  const items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]];
  const ruleKey = 'color';
  const ruleValue = 'silver';
  const result = countMatches(items, ruleKey, ruleValue);
  expect(result).toBe(1);
});

it('Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],\
    ruleKey = "type", ruleValue = "phone" \
    Output: 2', () => {
  const items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]];
  const ruleKey = "type";
  const ruleValue = "phone";
  const result = countMatches(items, ruleKey, ruleValue);
  expect(result).toBe(2);
});

