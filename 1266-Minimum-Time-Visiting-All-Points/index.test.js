const minTimeToVisitAllPoints = require('./index.js');
describe('Minimum Time Visiting All Points', () => {
  it('Input: points = [[1,1],[3,4],[-1,0]], Output: 7', () => {
    const points = [[1,1],[3,4],[-1,0]];
    const question = minTimeToVisitAllPoints(points);
    const answer = 7;
    expect(question).toStrictEqual(answer);
  });
  
  it('Input: points = [[3,2],[-2,2]], Output: 5', () => {
    const points = [[3,2],[-2,2]];
    const question = minTimeToVisitAllPoints(points);
    const answer = 5;
    expect(question).toStrictEqual(answer);
  });
});