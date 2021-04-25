const diagonalSum = require('./index.js');

describe('Matrix Diagonal Sum', () => {
  it('Input: mat = [[1,2,3], [4,5,6], [7,8,9]] Output: 25', () => {
    const mat = [[1,2,3], [4,5,6], [7,8,9]];
    const question = diagonalSum(mat);
    const answer = 25;
    expect(question).toBe(answer);
  });

  it('Input: mat = [[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]], Output: 8', () => {
    const mat = [[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]];
    const question = diagonalSum(mat);
    const answer = 8;
    expect(question).toBe(answer);
  });
  
  it('Input: mat = [[5]], Output: 5', () => {
    const mat = [[5]];
    const question = diagonalSum(mat);
    const answer = 5;
    expect(question).toBe(answer);
  });
});