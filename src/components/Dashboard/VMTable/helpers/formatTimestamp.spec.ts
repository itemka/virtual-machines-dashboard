import { formatTimestamp } from './formatTimestamp.ts';

describe('formatTimestamp', () => {
  const oneDayInMs = 86400000;
  const oneHourInMs = 3600000;
  const oneMinuteInMs = 60000;
  const oneSecondInMs = 1000;

  test('should return "0:00:00:00" when input is 0', () => {
    expect(formatTimestamp(0)).toBe('0:00:00:00');
  });

  test('should format milliseconds to "days:hours:minutes:seconds"', () => {
    expect(formatTimestamp(oneDayInMs)).toBe('1:00:00:00');
    expect(formatTimestamp(oneHourInMs)).toBe('0:01:00:00');
    expect(formatTimestamp(oneMinuteInMs)).toBe('0:00:01:00');
    expect(formatTimestamp(oneSecondInMs)).toBe('0:00:00:01');
  });

  test('should format combined duration values', () => {
    const timeInMs =
      oneDayInMs + 2 * oneHourInMs + 3 * oneMinuteInMs + 4 * oneSecondInMs;

    expect(formatTimestamp(timeInMs)).toBe('1:02:03:04');
  });

  test('should handle values with zero days, hours, minutes, or seconds', () => {
    const timeInMs = 2 * oneHourInMs + 45 * oneSecondInMs;

    expect(formatTimestamp(timeInMs)).toBe('0:02:00:45');
  });

  test('should add leading zeros to hours, minutes, and seconds below 10', () => {
    const timeInMs = 3 * oneHourInMs + 5 * oneMinuteInMs + 9 * oneSecondInMs;

    expect(formatTimestamp(timeInMs)).toBe('0:03:05:09');
  });

  test('should handle large durations', () => {
    const largeTimeInMs =
      30 * oneDayInMs +
      10 * oneHourInMs +
      59 * oneMinuteInMs +
      59 * oneSecondInMs;

    expect(formatTimestamp(largeTimeInMs)).toBe('30:10:59:59');
  });
});
