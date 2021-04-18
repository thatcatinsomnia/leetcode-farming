const countGoodTriplets = require('./index.js');

describe('Count Good Triplets', () => {
  it('Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3, Output: 4', () => {
    const arr = [3,0,1,1,9,7];
    const a = 7;
    const b = 2;
    const c = 3;
    const question = countGoodTriplets(arr, a, b, c);
    const answer = 4;
    expect(question).toBe(answer);
  });

  it('Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1, Output: 0', () => {
    const arr = [1,1,2,2,3];
    const a = 0;
    const b = 0;
    const c = 1;
    const question = countGoodTriplets(arr, a, b, c);
    const answer = 0;
    expect(question).toBe(answer);
  });
});