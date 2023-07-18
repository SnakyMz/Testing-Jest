const stringLength = require('./strlen.js');
const stringReverse = require('./strrev.js');

test('returns number of characters in Apple', () => {
    expect(stringLength('Apple')).toBe(5);
});

test('returns number of characters in Banana', () => {
    expect(stringLength('Banana')).toBe(6);
});

test('returns number of characters in Microverse', () => {
    expect(stringLength('Micorverse')).toBe(10);
});

test('returns error', () => {
    expect(stringLength('Misunderstanding')).toMatch('Word should be atmost 10 letters');
});

test('returns error', () => {
    expect(stringLength('Misconception')).toMatch('Word should be atmost 10 letters');
});

test('returns error', () => {
    expect(stringLength('Uninterupted')).toMatch('Word should be atmost 10 letters');
});

test('returns reverse of Apple', () => {
    expect(stringReverse('Apple')).toMatch('elppA');
});

test('returns reverse of CAR', () => {
    expect(stringReverse('CAR')).toMatch('RAC');
});

test('returns reverse of small', () => {
    expect(stringReverse('small')).toMatch('llams');
});

const calculator = require('./calculator.js');
const cal = new calculator();

describe('adding', () => {
    test('2 plus 4 returns 6', () => {
        expect(cal.add(2, 4)).toBe(6);
    });

    test('10 plus 45 returns 55', () => {
        expect(cal.add(10, 45)).toBe(55);
    });

    test('23 plus 34 returns 57', () => {
        expect(cal.add(23, 34)).toBe(57);
    });
});

describe('subtract', () => {
    test('4 minus 2 returns 2', () => {
        expect(cal.subtract(4, 2)).toBe(2);
    });

    test('45 minus 10 returns 35', () => {
        expect(cal.subtract(45, 10)).toBe(35);
    });

    test('34 minus 23 returns 11', () => {
        expect(cal.subtract(34, 23)).toBe(11);
    });
});

describe('divide', () => {
    test('4 divide by 2 returns 2', () => {
        expect(cal.divide(4, 2)).toBe(2);
    });
    test('40 divide by 10 returns 4', () => {
        expect(cal.divide(40, 10)).toBe(4);
    });
    test('42 divide by 7 returns 6', () => {
        expect(cal.divide(42, 7)).toBe(6);
    });
});

describe('multiply', () => {
    test('4 multiply by 2 returns 8', () => {
        expect(cal.multiply(4, 2)).toBe(8);
    });
    test('3 multiply by 5 returns 15', () => {
        expect(cal.multiply(3, 5)).toBe(15);
    });
    test('9 multiply by 9 returns 81', () => {
        expect(cal.multiply(9, 9)).toBe(81);
    });
});

const capitalize = require('./strcap.js');

test('returns first letter capitalized', () => {
    expect(capitalize('apple')).toMatch('Apple');
});