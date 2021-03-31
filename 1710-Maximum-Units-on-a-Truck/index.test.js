const maximumUnits = require('./index');

it('[[1,3],[2,2],[3,1]], 4  should return 8', () => {
  expect(maximumUnits([[1,3],[2,2],[3,1]], 4)).toBe(8);
});

it('[[5,10],[2,5],[4,7],[3,9]], 10 should return 91', () => {
  expect(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10)).toBe(91);
});

