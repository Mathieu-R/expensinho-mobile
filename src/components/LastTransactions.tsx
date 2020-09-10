import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
import Text from './Text';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from '../styles';
import transactions from '../data';
import { getDateString, getTransactionString, categoryToIcon } from '../utils';

const recents = transactions
  .sort((a, b) => b.date.getTime() - a.date.getTime())
  .slice(0, 5);

const LastTransactions = ({ navigation }) => {
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
          onPress={() => navigation.navigate('AllTransactions')}
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

export default LastTransactions;
