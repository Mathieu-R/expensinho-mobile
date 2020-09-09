import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Text from './Text';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { distanceInWordsToNow } from 'date-fns';

import theme from '../styles';

import transactions from '../data';

const { incomes, expenses } = transactions;
const recents = [...incomes, ...expenses]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
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

const dateToWord = (date: Date) => {
  return distanceInWordToNow(date);
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
              {dateToWord(transaction.date)}
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
