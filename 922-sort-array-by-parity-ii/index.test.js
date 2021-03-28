const sortArrayByParityII = require('./index');

it('[4,2,5,7] should return [4,5,2,7]', () => {
  expect(sortArrayByParityII([4, 2, 5, 7])).toStrictEqual([4, 5, 2, 7]);
});

it('[2,3] should return [2,3]', () => {
  expect(sortArrayByParityII([2,3])).toStrictEqual([2,3]);
});