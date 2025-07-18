const { expect } = require('chai');
const { describe, it } = require('mocha');
const { calculateSum } = require('./02-commandpalette');

// Import the function to test

describe('calculateSum', () => {
    it('should return the sum of two positive numbers', () => {
        expect(calculateSum(2, 3)).to.equal(5);
    });

    it('should return the sum of two negative numbers', () => {
        expect(calculateSum(-2, -3)).to.equal(-5);
    });

    it('should return the sum when one number is zero', () => {
        expect(calculateSum(0, 5)).to.equal(5);
        expect(calculateSum(7, 0)).to.equal(7);
    });

    it('should return the sum of a positive and a negative number', () => {
        expect(calculateSum(5, -3)).to.equal(2);
        expect(calculateSum(-4, 6)).to.equal(2);
    });

    it('should return the correct sum for floating point numbers', () => {
        expect(calculateSum(1.5, 2.3)).to.be.closeTo(3.8, 0.0001);
    });
});