const xorOperation = require('./index');

describe('XOR Operation in an Array', () => {
  it('Input: n = 5, start = 0, Output: 8', () => {
    const n = 5;
    const start = 0;
    const answer = 8;
    expect(xorOperation(n, start)).toBe(answer);
  });

  it('Input: n = 4, start = 3, Output: 8', () => {
    const n = 4;
    const start = 3;
    const answer = 8;
    expect(xorOperation(n, start)).toBe(answer);
  });

  it('Input: n = 1, start = 7, Output: 7', () => {
    const n = 1;
    const start = 7;
    const answer = 7;
    expect(xorOperation(n, start)).toBe(answer);
  });

  it('Input: n = 10, start = 5, Output: 2', () => {
    const n = 10;
    const start = 5;
    const answer = 2;
    expect(xorOperation(n, start)).toBe(answer);
  });
});