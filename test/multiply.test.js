// Add the unit tests of the multiply function here

const multiply = require('../src/multiply');

test('multiply 2 by 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test ('1 argument of sum is a string', () => {
    expect(multiply('1',2)).toEqual(expect.stringContaining('error'));

});

test ('both arguments of sum are strings', () => {
    expect(multiply('1','toto')).toEqual(expect.stringContaining('error'));

});