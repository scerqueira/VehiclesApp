import { formatDate, isDateInPast, getMonthsAndDaysLeft, FORMAT_DATE, FORMAT_DATE_TIME, FORMAT_TIME } from './dates';

describe('dateUtils', () => {
  describe('formatDate', () => {
    it('correctly formats a date in DD/MM/YYYY format', () => {
      const date = '2024/04/15 09:00:00';
      const formattedDate = formatDate(date, FORMAT_DATE);
      expect(formattedDate).toBe('15/04/2024');
    });

    it('correctly formats a date in DD/MM/YYYY HH:mm A format', () => {
      const date = '2024/04/15 09:00:00';
      const formattedDate = formatDate(date, FORMAT_DATE_TIME);
      expect(formattedDate).toBe('15/04/2024 09:00 AM');
    });

    it('correctly formats a time in HH:mm A format', () => {
      const date = '2024/04/15 09:00:00';
      const formattedTime = formatDate(date, FORMAT_TIME);
      expect(formattedTime).toBe('09:00 AM');
    });
  });

  describe('isDateInPast', () => {
    it('returns true if the date is in the past', () => {
      const pastDate = '2024/04/15 09:00:00';
      expect(isDateInPast(pastDate)).toBe(true);
    });

    it('returns false if the date is in the future', () => {
      const futureDate = '2025/05/15 09:00:00';
      expect(isDateInPast(futureDate)).toBe(false);
    });
  });

  describe('getMonthsAndDaysLeft', () => {
    it('returns correct months and days left from today', () => {
      const futureDate = '2025-06-15';
      const monthsAndDaysLeft = getMonthsAndDaysLeft(futureDate);
      expect(monthsAndDaysLeft).toMatch(/\d+ months, \d+ days left/);
    });
  });
});
