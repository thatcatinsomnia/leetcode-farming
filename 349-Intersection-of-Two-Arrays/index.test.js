const intersection = require('./index');

describe('Intersection of Two Arrays', () => {
  it('nums1 = [1,2,2,1], nums2 = [2,2] should return [2]', () => {
    expect(intersection([1,2,2,1], [2,2])).toStrictEqual([2]);
  });
  
  it('nums1 = [4,9,5], nums2 = [9,4,9,8,4] should [9,4]', () => {
    expect(intersection([4,9,5], [9,4,9,8,4])).toStrictEqual([9,4]);
  });
});
