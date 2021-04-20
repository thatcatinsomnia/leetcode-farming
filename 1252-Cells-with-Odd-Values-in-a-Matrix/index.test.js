const oddCells = require('./index');

describe('1252-Cells-with-Odd-Values-in-a-Matrix', () => {
  it('Input: m = 2, n = 3, indices = [[0,1],[1,1]], Output: 6', () => {
    const m = 2;
    const n = 3;
    const indices = [[0, 1], [1, 1]];
    const question = oddCells(m, n, indices);
    const answer = 6;
  
    expect(question).toBe(answer);
  });

  it('Input: m = 2, n = 2, indices = [[1,1],[0,0]], Output: 0', () => {
    const m = 2;
    const n = 2;
    const indices = [[1,1],[0,0]];
    const question = oddCells(m, n, indices);
    const answer = 0;
  
    expect(question).toBe(answer);
  });
});