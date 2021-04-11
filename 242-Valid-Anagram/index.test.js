const isAnagram = require('./index');

describe('Valid Anagram', () => {
  it('s = "anagram", t = "nagaram", Output: true', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('s = "rat", t = "car", Output: false', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  it('s = "anagram", t = "nagaram", Output: true', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });
})