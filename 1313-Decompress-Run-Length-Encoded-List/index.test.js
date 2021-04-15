const decompressRLElist = require('./index');

describe('1122-Relative-Sort-Array', () => {
  it('Input: nums = [1,2,3,4], Output: [2,4,4,4]', () => {
    const answer = decompressRLElist([1,2,3,4]);
    expect(answer).toStrictEqual([2,4,4,4]);
  });

  it('Input: nums = [1,1,2,3], Output: [1,3,3]', () => {
    const answer = decompressRLElist([1,1,2,3]);
    expect(answer).toStrictEqual([1,3,3]);
  });
});