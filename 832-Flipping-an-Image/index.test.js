const flipAndInvertImage = require('./index.js');

describe('Minimum Time Visiting All Points', () => {
  it('Input: image = [[1,1,0],[1,0,1],[0,0,0]], Output: [[1,0,0],[0,1,0],[1,1,1]]', () => {
    const image = [[1,1,0],[1,0,1],[0,0,0]];
    const question = flipAndInvertImage(image);
    const answer = [[1,0,0],[0,1,0],[1,1,1]];
    expect(question).toStrictEqual(answer);
  });
  
  it('Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]], Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]', () => {
    const image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
    const question = flipAndInvertImage(image);
    const answer = [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]];
    expect(question).toStrictEqual(answer);
  });
});