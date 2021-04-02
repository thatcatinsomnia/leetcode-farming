const relativeSortArray = require('./index');

describe('1122-Relative-Sort-Array', () => {
  it('input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6] output:[2,2,2,1,4,3,3,9,6,7,19]', () => {
    const answer = relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]);
    expect(answer).toStrictEqual([2,2,2,1,4,3,3,9,6,7,19]);
  });
});