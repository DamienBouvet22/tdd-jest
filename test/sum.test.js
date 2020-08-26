// Add the unit tests of the sum function here

const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test ('1 argument of sum is a string', () => {
    expect(sum('1',2)).toEqual(expect.stringContaining('error'));

});

test ('both arguments of sum are strings', () => {
    expect(sum('1','toto')).toEqual(expect.stringContaining('error'));

});
