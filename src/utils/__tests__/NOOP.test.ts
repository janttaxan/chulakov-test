import { NOOP } from '../NOOP';

describe('NOOP', () => {
  test('should return undefined', () => {
    expect(NOOP()).toBeUndefined();
  });
});
