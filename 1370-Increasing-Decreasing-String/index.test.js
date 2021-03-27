const sortString = require('./index');

it('aaaabbbbcccc should return abccbaabccba', () => {
  expect(sortString('aaaabbbbcccc')).toBe('abccbaabccba');
});

it('rat should return art', () => {
  expect(sortString('rat')).toBe('art');
});

it('leetcode should return cdelotee', () => {
  expect(sortString('leetcode')).toBe('cdelotee');
});

it('ggggggg should return ggggggg', () => {
  expect(sortString('ggggggg')).toBe('ggggggg');
});

it('spo should return ops', () => {
  expect(sortString('ops')).toBe('ops');
});