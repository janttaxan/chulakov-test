import { getIsValidNumber } from '../getIsValidNumber';

describe('getIsValidNumber', () => {
  test('Positive checking cases', () => {
    const numbers = [1, 0, 0.5, '123', '321asd']; // valid numbers
    for (let i = 1; i < numbers.length; i++) {
      expect(getIsValidNumber(numbers[i])).toBeTruthy();
    }
  });

  it('Negative checking cases', () => {
    const notNumbers = ['asd321', 'wqe', NaN];
    for (let i = 1; i < notNumbers.length; i++) {
      expect(getIsValidNumber(notNumbers[i])).toBeFalsy();
    }
  });
});
