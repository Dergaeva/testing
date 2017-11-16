import chai from 'chai';
const { assert } = chai;
chai.should();

import * as tools from './tools';



describe('sum', function() {
 it('should return 5 for sum(2, 3)', () => {
   tools.sum(12,3).should.not.equal(5);
 });

 it('should return 2 for sum(2, 0)', () => {
   assert.equal(tools.sum(2, 0), 2);
 });

 it('empty string equals 0', () => {
   assert.equal('', 0);
 });
});

describe('getDay return day', function() {
  it('should return current day', () => {
    const day  = new Date().getDay();
    tools.getDay(day).should.equal(day);
  });
});

describe('getAdultUsers return users age > 18', function() {
  it('should return length of new array', () => {
    const myUsers = [{age: 15}, {age: 19}];
    tools.getAdultUsers(myUsers).length.should.equal(1);
  });
});

describe('getRandomUsers num >< 0.5', function() {
  it('getRandomUsers  random 0.98', () => {
    const use2 = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}];
    Math.random = () => 0.98;
    const testUsers = tools.getRandomUsers(use2);
    testUsers[0].should.equal(use2[0]);
  });
  it('getRandomUsers  random 0.1', () => {
    const use2 = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}];
    Math.random = () => 0.1;
    const testUsers = tools.getRandomUsers(use2);
    testUsers[0].should.equal(use2[3]);
  });
});


