
const minOperations = require('./index');

describe('Minimum Operations to Make the Array Increasing', () => {
  it('Input: nums = [1,1,1], Output: 3', () => {
    const nums = [1,1,1];
    const question = minOperations(nums);
    const answer = 3; 
    expect(question).toBe(answer);
  });
  
  it('Input: nums = [1,5,2,4,1], Output: 14', () => {
    const nums = [1,5,2,4,1];
    const question = minOperations(nums);
    const answer = 14; 
    expect(question).toBe(answer);
  });
  
  it('Input: nums = [8], Output: 14', () => {
    const nums = [8];
    const question = minOperations(nums);
    const answer = 0; 
    expect(question).toBe(answer);
  });
});

