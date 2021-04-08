const canFormArray = require('./index');

describe('Check Array Formation Through Concatenation', () => {
  it('Input: arr = [85], pieces = [[85]] should return true', () => {
    expect(canFormArray([85], [[85]])).toBe(true);
  });

  it('arr = [15,88], pieces = [[88],[15]]', () => {
    expect(canFormArray([15,88], [[88],[15]])).toBe(true);
  });

  it('Input: arr = [49,18,16], pieces = [[16,18,49]] should return false', () => {
    expect(canFormArray([49,18,16], [[16,18,49]])).toBe(false);
  });

  it('arr = [91,4,64,78], pieces = [[78],[4,64],[91]]', () => {
    expect(canFormArray([91,4,64,78], [[78],[4,64],[91]])).toBe(true);
  });

  it('arr = [1,3,5,7], pieces = [[2,4,6,8]]', () => {
    expect(canFormArray([1,3,5,7], [[2,4,6,8]])).toBe(false);
  });
});