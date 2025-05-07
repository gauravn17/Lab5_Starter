// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber - valid inputs', () => {
  expect(isPhoneNumber('(858) 555-1234')).toBe(true);
  expect(isPhoneNumber('858-555-1234')).toBe(true);
});

test('isPhoneNumber - invalid inputs', () => {
  expect(isPhoneNumber('8585551234')).toBe(false);
  expect(isPhoneNumber('555-123')).toBe(false);
});

//isEmail Tests
test('isEmail - valid inputs', () => {
  expect(isEmail('gaurav@ucsd.edu')).toBe(true);
  expect(isEmail('hello_world123@example.org')).toBe(true);
});

test('isEmail - invalid inputs', () => {
  expect(isEmail('missing@domain')).toBe(false);
  expect(isEmail('bad@email.toolong')).toBe(false);
});

//isStrongPassword Tests
test('isStrongPassword - valid inputs', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
  expect(isStrongPassword('A_veryGood1')).toBe(true);
});

test('isStrongPassword - invalid inputs', () => {
  expect(isStrongPassword('1badpassword')).toBe(false);
  expect(isStrongPassword('no')).toBe(false);
});

//isDate Tests
test('isDate - valid inputs', () => {
  expect(isDate('12/31/2023')).toBe(true);
  expect(isDate('1/1/2024')).toBe(true);
});

test('isDate - invalid inputs', () => {
  expect(isDate('2023/12/31')).toBe(false);
  expect(isDate('3102/12/23')).toBe(false);
});

//isHexColor Tests
test('isHexColor - valid inputs', () => {
  expect(isHexColor('#fff')).toBe(true);
  expect(isHexColor('ABC123')).toBe(true);
});

test('isHexColor - invalid inputs', () => {
  expect(isHexColor('#12345')).toBe(false);
  expect(isHexColor('GGG')).toBe(false);
});