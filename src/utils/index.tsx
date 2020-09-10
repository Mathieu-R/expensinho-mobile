import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import sub from 'date-fns/sub';
import isBefore from 'date-fns/isBefore';
import isAfter from 'date-fns/isAfter';
import getYear from 'date-fns/getYear';

export const categoryToIcon = {
  Music: {
    icon: 'music',
    color: '#f94144'
  },
  Food: {
    icon: 'food-fork-drink',
    color: '#f3722c'
  },
  Sport: {
    icon: 'basketball',
    color: '#f8961e'
  },
  Sneakers: {
    icon: 'shoe-formal',
    color: '#f9c74f' //#8a5a44
  },
  Clothes: {
    icon: 'alpha-c-box-outline',
    color: '#90be6d'
  },
  Entertainment: {
    icon: 'movie-open',
    color: '#43aa8b'
  },
  Transport: {
    icon: 'car',
    color: '#577590'
  },
  Utilitary: {
    icon: 'hammer-screwdriver',
    color: '#f94144'
  },
  Gift: {
    icon: 'gift',
    color: '#f3722c'
  },
  Salary: {
    icon: 'alpha-s-box-outline',
    color: '#f8961e'
  },
  Refund: {
    icon: 'arrow-down-bold-hexagon-outline',
    color: '#90be6d'
  },
  'Extra income': {
    icon: 'arrow-down-bold-hexagon-outline', //application-import
    color: '#43aa8b'
  },
  Transfert: {
    icon: 'bank-transfer',
    color: '#577590'
  }
};

export const getTransactionString = (value: number) => {
  const plusOrMinus = value < 0 ? '-' : '+';
  return `${plusOrMinus} ${value} €`;
};

export const getDateString = (date: Date) => {
  let pattern = 'EEEE dd MMMM yyyy';

  const dateMinusThreeDays = sub(new Date(), { days: 3 });
  const dateMinusOneWeek = sub(new Date(), { weeks: 1 });
  const isDateLessThan3DaysOld = isAfter(date, dateMinusThreeDays);
  const isDateMoreThanOneWeekOld = isBefore(date, dateMinusOneWeek);
  const isDateFromThisYear = getYear(date) === getYear(new Date());

  // for dates not older than three day ago
  // we just use stuff like "yesterday,..."
  if (isDateLessThan3DaysOld) {
    console.log(date, dateMinusThreeDays);
    return formatDistanceToNow(date, { addSuffix: true });
  }

  // for dates older than one week ago
  // we remove the name of the day
  if (isDateFromThisYear && isDateMoreThanOneWeekOld) {
    pattern = 'dd MMMM';
  }

  // for dates that are from this year
  // we remove the year
  if (!isDateFromThisYear && isDateMoreThanOneWeekOld) {
    pattern = 'dd MMMM yyyy';
  }

  return format(date, pattern, { weekStartsOn: 1 });
};
