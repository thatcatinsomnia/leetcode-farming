const frequencySort = require('./index');

describe('Sort Array by Increasing Frequency', () => {
  it('Input: nums = [1,1,2,2,2,3], Output: [3,1,1,2,2,2]', () => {
    expect(frequencySort([1,1,2,2,2,3])).toStrictEqual([3,1,1,2,2,2]);
  });

  it('Input: nums = [2,3,1,3,2], Output: [1,3,3,2,2]', () => {
    expect(frequencySort([2,3,1,3,2])).toStrictEqual([1,3,3,2,2]);
  });

  it('Input: nums = [-1,1,-6,4,5,-6,1,4,1], Output: [5,-1,4,4,-6,-6,1,1,1]', () => {
    expect(frequencySort([-1,1,-6,4,5,-6,1,4,1])).toStrictEqual([5,-1,4,4,-6,-6,1,1,1]);
  });
});