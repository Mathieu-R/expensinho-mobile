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
  Entertainement: {
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

const getTransactionString = (value: number) => {
  const plusOrMinus = value < 0 ? '-' : '+';
  return `${plusOrMinus} ${value} €`;
};

const getDateString = (date: Date) => {
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

const Transactions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text type="small" weight="bold" color={theme.colors.black}>
          Last Transactions
        </Text>
        <Text
          type="small"
          weight="bold"
          color={theme.colors.violet}
          onPress={() => navigation.navigate('transaction-all')}
        >
          View All
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {recents.map((transaction, index) => (
          <View style={styles.transaction} key={index}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name={categoryToIcon[transaction.category].icon}
                size={32}
                color={categoryToIcon[transaction.category].color}
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
                {getTransactionString(transaction.value)}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: theme.colors.background
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  scrollContainer: {
    flex: 1
  },
  transaction: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  iconContainer: {
    padding: 7,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: theme.colors.white
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
