const average = require('./index');

it('[4000,3000,1000,2000] should return 25000', () => {
  expect(average([4000,3000,1000,2000])).toBe(2500);
});

it('[1000,2000,3000] should return 2000', () => {
  expect(average([1000,2000,3000])).toBe(2000);
});

it('[6000,5000,4000,3000,2000,1000] should return 3500', () => {
  expect(average([6000,5000,4000,3000,2000,1000])).toBe(3500);
});