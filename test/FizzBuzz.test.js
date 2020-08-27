// Add the unit tests of the fizzbuzz function here

const list = require('../src/fizzbuzz');


test('1 is 1', () => {
    expect(list(1)).toBe(1)
});

test('0 throws error', () => {
    expect(() => {
        list(0);
    }).toThrow();
});

test ('3 is Fizz', () => {
    expect(list(3)).toBe('Fizz')
});

test ('5 is Buzz', () => {
    expect(list(5)).toBe('Buzz')
});

test ('15 is FizzBuzz', () => {
    expect(list(15)).toBe('FizzBuzz')
});