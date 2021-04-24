const findNumbers = require('./index.js');

describe('Minimum Time Visiting All Points', () => {
  it('Input: nums = [12,345,2,6,7896], Output: 2', () => {
    const nums = [12,345,2,6,7896];
    const question = findNumbers(nums);
    const answer = 2;
    expect(question).toStrictEqual(answer);
  });
  
  it('Input: nums = [555,901,482,1771], Output: 1', () => {
    const nums = [555,901,482,1771];
    const question = findNumbers(nums);
    const answer = 1;
    expect(question).toStrictEqual(answer);
  });
});