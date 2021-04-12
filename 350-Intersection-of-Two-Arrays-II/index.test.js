const intersect = require('./index');

it('Input: nums1 = [1,2,2,1], nums2 = [2,2], Output: [2,2]', () => {
  expect(intersect([1,2,2,1], [2,2])).toEqual(expect.arrayContaining([2,2]));
});

it('Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4], Output: [4,9]', () => {
  expect(intersect([4,9,5], [9,4,9,8,4])).toEqual(expect.arrayContaining([4,9]));
});