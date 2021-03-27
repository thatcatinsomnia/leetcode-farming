const canMakeArithmeticProgression = require('./index');

it('input [3,5,1] should return TRUE', () => {
  expect(canMakeArithmeticProgression([3, 5, 1])).toBe(true);
});

it('input [1,2,4] should return FALSE', () => {
  expect(canMakeArithmeticProgression([1,2,4])).toBe(false);
});