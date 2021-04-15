const createTargetArray = require('./index');

it('Input: nums = [0,1,2,3,4], index = [0,1,2,2,1], Output: [0,4,1,3,2]', () => {
  const nums = [0,1,2,3,4];
  const index = [0,1,2,2,1];
  const answer = [0,4,1,3,2];
  const result = createTargetArray(nums, index);
  expect(result).toStrictEqual(answer);
});

it('Input: nums = [1,2,3,4,0], index = [0,1,2,3,0], Output: [0,1,2,3,4]', () => {
  const nums = [1,2,3,4,0];
  const index = [0,1,2,3,0];
  const answer = [0,1,2,3,4];
  const result = createTargetArray(nums, index);
  expect(result).toStrictEqual(answer);
});