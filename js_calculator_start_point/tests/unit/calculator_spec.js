var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('can add two numbers', function(){
    calculator.previousTotal = '1'
    calculator.add(4)
    assert.equal(5.0, calculator.runningTotal)
  })

  it('can subtract two numbers', function(){
    calculator.previousTotal = '7'
    calculator.subtract(4)
    assert.equal(3.0, calculator.runningTotal)
  })

  it('can multiply two numbers', function(){
    calculator.previousTotal = '3'
    calculator.multiply(5)
    assert.equal(15.0, calculator.runningTotal)
  })

  it('can divide two numbers', function(){
    calculator.previousTotal = '21'
    calculator.divide(7)
    assert.equal(3.0, calculator.runningTotal)
  })

  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick('7')
    calculator.numberClick('8')
    assert.equal(78.0, calculator.runningTotal)
  })

  it('can concatenate multiple operator clicks', function(){
    calculator.numberClick('3'),
    calculator.operatorClick('-')
    calculator.operatorClick('+')
    calculator.numberClick('2')
    assert.equal(1.0, calculator.runningTotal)
  })

  it('can clear click the running total', function(){
    calculator.numberClick('2')
    calculator.operatorClick('+')
    calculator.numberClick('2')
    calculator.clearClick()
    assert.equal(0.0, calculator.runningTotal)
  })

});
