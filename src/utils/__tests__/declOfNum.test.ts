import { declOfNum } from '../declOfNum';

const casesYears = ['год', 'года', 'лет'];
const casesSeconds = ['секунда', 'секунды', 'секунд'];

describe('declOfNum', () => {
  test('positive cases', () => {
    expect(declOfNum(1, casesYears)).toBe('год');
    expect(declOfNum(2, casesYears)).toBe('года');
    expect(declOfNum(5, casesYears)).toBe('лет');

    expect(declOfNum(1, casesSeconds)).toBe('секунда');
    expect(declOfNum(24, casesSeconds)).toBe('секунды');
    expect(declOfNum(10, casesSeconds)).toBe('секунд');
  });
  test('negative cases', () => {
    expect(declOfNum(NaN, casesSeconds)).toBe('');
  });
});
