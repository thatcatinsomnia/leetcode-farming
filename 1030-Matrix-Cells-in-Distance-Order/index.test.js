const allCellsDistOrder = require('./index');

describe('Matrix Cells in Distance Order', () => {
  it('Input: R = 1, C = 2, r0 = 0, c0 = 0 Output: [[0,0],[0,1]]', () => {
    expect(allCellsDistOrder(1, 2, 0, 0)).toStrictEqual([[0,0],[0,1]]);
  });

  it('Input: R = 2, C = 2, r0 = 0, c0 = 1 Output: [[0,1],[0,0],[1,1],[1,0]]', () => {
    expect(allCellsDistOrder(2, 2, 0, 1)).toStrictEqual([[0,1],[0,0],[1,1],[1,0]]);
  });

  it('Input: R = 2, C = 3, r0 = 1, c0 = 2 Output: [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]', () => {
    expect(allCellsDistOrder(2, 3, 1, 2)).toStrictEqual([[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]);
  });
})