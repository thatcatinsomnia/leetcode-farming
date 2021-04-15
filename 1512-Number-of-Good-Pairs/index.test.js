const numIdenticalPairs = require('./index');

describe('Number of Good Pairs', () => {
  it('Input: nums = [1,2,3,1,1,3], Output: 4', () => {
    expect(numIdenticalPairs([1,2,3,1,1,3])).toBe(4);
  });

  it('nums = [1,1,1,1], Output: 6', () => {
    expect(numIdenticalPairs([1,1,1,1])).toBe(6);
  });

  it('Input: nums = [1,2,3], Output: 0', () => {
    expect(numIdenticalPairs([1,2,3])).toBe(0);
  });
})