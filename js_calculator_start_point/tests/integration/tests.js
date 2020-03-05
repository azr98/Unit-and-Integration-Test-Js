const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('Number buttons can update the display of running total', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('333')
  })

  it('as an operation is completed the display should be updated', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number8')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('15')
  })

  it('should be able to chain multiple operations', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number4')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    expect(runningTotal.getAttribute('value')).to.eventually.equal('14')
  })

  it('Output should be as expected for positive numbers', function(){
    runningTotal = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    expect(runningTotal.getAttribute('value')).to.eventually.equal('4')
  })

  it('Output should be as expected for negative, positive, large and decimal numbers', function(){
    running_total = element(by.css('running_total'))
    element(by.css('#number5')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('5')

    element(by.css('#operator_subtract')).click()
    element(by.css('#number10')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-5')

    element(by.css('#operator_divide')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-2.5')

    element(by.css('#clear')).click()

    element(by.css('#number8')).click()
    element(by.css('#number8')).click()
    element(by.css('#number8')).click()
    element(by.css('#number8')).click()
    element(by.css('#number8')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number8')).click()
    element(by.css('#number8')).click()
    element(by.css('#number8')).click()
    element(by.css('#number8')).click()
    element(by.css('#number8')).click()
    element(by.css('#operator_equals')).click()

    expect(running_total.getAttribute('value')).to.eventually.equal('9999800001')
  })


  it('should be able to display appropriate output when dividng by 0', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('undefined')
  })

});
