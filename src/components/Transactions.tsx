import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Text from './Text';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import sub from 'date-fns/sub';
import isBefore from 'date-fns/isBefore';
import isAfter from 'date-fns/isAfter';
import getYear from 'date-fns/getYear';

import theme from '../styles';

import transactions from '../data';

const recents = transactions
  .sort((a, b) => b.date.getTime() - a.date.getTime())
  .slice(0, 5);

const categoryToIcon = {
  Music: 'music',
  Food: 'food-fork-drink',
  Sport: 'basketball',
  Sneakers: '',
  Clothes: '',
  Entertainement: '',
  Transport: '',
  Utility: '',
  Gift: 'gift',
  Job: '',
  Refund: '',
  'Extra income': '',
  Transfert: ''
};

const getTransactionValue = (value: number) => {
  const plusOrMinus = value < 0 ? '-' : '+';
  return `${plusOrMinus} ${value}`;
};

const getDateString = (date: Date) => {
  let pattern = 'EEEE DD MMMM YYYY';

  const dateMinusThreeDays = sub(date, { days: 3 });
  const dateMinusOneWeek = sub(date, { weeks: 1 });
  const isDateLaterThan3DaysOld = isAfter(date, dateMinusThreeDays);
  const isDateMoreThanOneWeekOld = isBefore(date, dateMinusOneWeek);
  const isDateFromThisYear = getYear(date) === getYear(new Date());

  // for dates not older than three day ago
  // we just use stuff like "yesterday,..."
  if (isDateLaterThan3DaysOld) {
    return formatDistanceToNow(date, { addSuffix: true });
  }

  // for dates older than one week ago
  // we remove the name of the day
  if (isDateMoreThanOneWeekOld) {
    pattern = 'DD MMMM YYYY';
  }

  // for dates that are from this year
  // we remove the year
  if (isDateFromThisYear) {
    pattern = 'EEEE DD MMMM';
  }

  return format(date, pattern, { weekStartsOn: 1 });
};

const Transactions = () => {
  return (
    <ScrollView style={styles.container}>
      {recents.map((transaction) => (
        <View>
          <View style={styles.iconContainer}>
            <MaterialIcons
              name={categoryToIcon[transaction.category]}
              size={32}
              color={theme.colors.white}
            />
          </View>
          <View style={styles.transactionTextBox}>
            <Text type="small" weight="bold">
              {transaction.name}
            </Text>
            <Text type="tiny" weight="regular">
              {getDateString(transaction.date)}
            </Text>
          </View>
          <View style={styles.transactionValue}>
            <Text type="medium" weight="bold">
              {getTransactionValue(transaction.value)}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  iconContainer: {
    padding: 7,
    borderRadius: 10,
    backgroundColor: theme.colors.violet
  },
  transactionTextBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  transactionValue: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Transactions;
