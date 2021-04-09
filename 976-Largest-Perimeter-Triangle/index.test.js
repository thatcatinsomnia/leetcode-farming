const largestPerimeter = require('./index');

describe('Largest Perimeter Triangle', () => {
  it('Input: nums = [2,1,2] should return 5', () => {
    expect(largestPerimeter([2, 1, 2])).toBe(5);
  });

  it('Input: nums = [1,2,1] should return 0', () => {
    expect(largestPerimeter([1,2,1])).toBe(0);
  });

  it('Input: nums = [3,2,3,4] should return 10', () => {
    expect(largestPerimeter([3,2,3,4])).toBe(10);
  });
  it('Input: nums = [3,6,2,3] should return 8', () => {
    expect(largestPerimeter([3,6,2,3])).toBe(8);
  });
});