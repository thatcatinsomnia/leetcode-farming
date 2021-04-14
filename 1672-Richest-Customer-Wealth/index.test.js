const maximumWealth = require('./index');

describe('Richest Customer Wealth', () => {
  it('Input: accounts = [[1,2,3],[3,2,1]], Output: 6', () => {
    expect(maximumWealth([[1,2,3],[3,2,1]])).toBe(6);
  });

  it('Input: accounts = accounts = [[1,5],[7,3],[3,5]], Output: 10', () => {
    expect(maximumWealth([[1,5],[7,3],[3,5]])).toBe(10);
  });
  it('Input: accounts = accounts = [[1,5],[7,3],[3,5]], Output: 17', () => {
    expect(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])).toBe(17);
  });
});