import dayjs from 'dayjs';

export const FORMAT_DATE = 'DD/MM/YYYY';
export const FORMAT_DATE_TIME = 'DD/MM/YYYY HH:mm A';
export const FORMAT_TIME = 'HH:mm A';

export const formatDate = (date: string | Date, format: string) => {
  return dayjs(date).format(format);
};

export const isDateInPast = (date: string | Date) => {
  return dayjs(date).isBefore(dayjs());
};

export const getMonthsAndDaysLeft = (date: string | Date) => {
  const now = dayjs();
  const targetDate = dayjs(date);

  const monthsLeft = targetDate.diff(now, 'month');
  const daysLeft = targetDate.diff(now.add(monthsLeft, 'month'), 'day');

  return `${monthsLeft} months, ${daysLeft} days left`;
};
