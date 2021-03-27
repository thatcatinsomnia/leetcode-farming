const minSubsequence = require('./index');

it('[4,3,10,9,8] should return [10, 9]', () => {
  expect(minSubsequence([4,3,10,9,8])).toStrictEqual([10, 9]);
});

it('[4,4,7,6,7] should return [7, 7, 6]', () => {
  expect(minSubsequence([4,4,7,6,7])).toStrictEqual([7, 7, 6]);
});