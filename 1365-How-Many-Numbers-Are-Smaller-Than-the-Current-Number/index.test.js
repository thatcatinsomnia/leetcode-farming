const smallerNumbersThanCurrent = require('./index');

describe('How Many Numbers Are Smaller Than the Current Number', () => {
  it('Input: nums = [8,1,2,2,3], Output: [4,0,1,1,3]', () => {
    expect(smallerNumbersThanCurrent([8,1,2,2,3])).toStrictEqual([4,0,1,1,3]);
  });

  it('Input: nums = [6,5,4,8], Output: [2,1,0,3]', () => {
    expect(smallerNumbersThanCurrent([6,5,4,8])).toStrictEqual([2,1,0,3]);
  });

  it('Input: nums = [7,7,7,7], Output: [0,0,0,0]', () => {
    expect(smallerNumbersThanCurrent([7,7,7,7])).toStrictEqual([0,0,0,0]);
  });
})