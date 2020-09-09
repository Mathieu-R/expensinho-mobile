import React from 'react';
import { FlatList, View, StyleSheet, ScrollView } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
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
  Sneakers: 'music',
  Clothes: 'music',
  Entertainement: 'music',
  Transport: 'music',
  Utilitary: 'music',
  Gift: 'gift',
  Job: 'music',
  Refund: 'music',
  'Extra income': 'music',
  Transfert: 'music'
};

const getTransactionValue = (value: number) => {
  const plusOrMinus = value < 0 ? '-' : '+';
  return `${plusOrMinus} ${value} €`;
};

const getDateString = (date: Date) => {
  let pattern = 'EEEE DD MMMM YYYY';

  const dateMinusThreeDays = sub(date, { days: 3 });
  const dateMinusOneWeek = sub(date, { weeks: 1 });
  const isDateLessThan3DaysOld = isAfter(date, dateMinusThreeDays);
  const isDateMoreThanOneWeekOld = isBefore(date, dateMinusOneWeek);
  const isDateFromThisYear = getYear(date) === getYear(new Date());

  // for dates not older than three day ago
  // we just use stuff like "yesterday,..."
  if (isDateLessThan3DaysOld) {
    return formatDistanceToNow(date, { addSuffix: true });
  }

  // for dates older than one week ago
  // we remove the name of the day
  if (isDateFromThisYear && isDateMoreThanOneWeekOld) {
    pattern = 'DD MMMM';
  }

  // for dates that are from this year
  // we remove the year
  if (!isDateFromThisYear && isDateMoreThanOneWeekOld) {
    pattern = 'DD MMMM YYYY';
  }

  return format(date, pattern, { weekStartsOn: 1 });
};

const Transactions = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text type="small" weight="bold" color={theme.colors.black}>
          Last Transactions
        </Text>
        <Text type="small" weight="bold" color={theme.colors.purple}>
          View All
        </Text>
      </View>
      {recents.map((transaction) => (
        <View style={styles.transaction}>
          <View style={styles.iconContainer}>
            <MaterialIcons
              name={categoryToIcon[transaction.category]}
              size={32}
              color={theme.colors.white}
            />
          </View>
          <View style={styles.transactionTextBox}>
            <Text
              type="tiny"
              weight="bold"
              color={theme.colors.purple}
              style={{ marginBottom: 5 }}
            >
              {transaction.name}
            </Text>
            <Text type="tiny" weight="regular" color={theme.colors.darkGray}>
              {getDateString(transaction.date)}
            </Text>
          </View>
          <View style={styles.transactionValue}>
            <Text type="small" weight="bold" color={theme.colors.purple}>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginTop: 75,
    backgroundColor: theme.colors.background
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  transaction: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  iconContainer: {
    padding: 7,
    borderRadius: 10,
    backgroundColor: theme.colors.violet
  },
  transactionTextBox: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  transactionValue: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Transactions;
