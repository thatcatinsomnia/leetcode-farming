const largestAltitude = require('./index');

describe('Find the Highest Altitude', () => {
  it('Input: gain = [-5,1,5,0,-7], Output: 1', () => {
    const gain = [-5,1,5,0,-7];
    const question = largestAltitude(gain);
    const answer = 1
    expect(question).toBe(answer);
  });
  
  it('Input: gain = [-4,-3,-2,-1,4,3,2], Output: 0', () => {
    const gain =  [-4,-3,-2,-1,4,3,2];
    const question = largestAltitude(gain);
    const answer = 0
    expect(question).toBe(answer);
  });
});


