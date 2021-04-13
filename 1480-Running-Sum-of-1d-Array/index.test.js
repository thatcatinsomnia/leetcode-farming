const runningSum = require('./index');

describe('running sum of 1d array', () => {
  it('Input: nums = [1,2,3,4], Output: [1,3,6,10]', () => {
    expect(runningSum([1,2,3,4])).toStrictEqual([1,3,6,10]);
  });

  it('Input: nums = [1,1,1,1,1], Output: [1,2,3,4,5]', () => {
    expect(runningSum([1,1,1,1,1])).toStrictEqual([1,2,3,4,5]);
  });
});