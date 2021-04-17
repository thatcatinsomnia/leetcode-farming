const sumOddLengthSubarrays = require('./index');

describe('Sort Array by Increasing Frequency', () => {
  it('Input: arr = [1,4,2,5,3], Output: 58', () => {
    const arr = [1,4,2,5,3]
    const question = sumOddLengthSubarrays(arr);
    const answer = 58;
    expect(question).toStrictEqual(answer);
  });

  it('Input: arr = [1,2], Output: 3', () => {
    const arr = [1,2];
    const question = sumOddLengthSubarrays(arr);
    const answer = 3;
    expect(question).toStrictEqual(answer);
  });

  it('Input: arr = [10,11,12], Output: 66', () => {
    const arr =  [10,11,12];
    const question = sumOddLengthSubarrays(arr);
    const answer = 66;
    expect(question).toStrictEqual(answer);
  });
});