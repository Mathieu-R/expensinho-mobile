import React, { useState, useEffect } from 'react';
import { Pressable, FlatList, View, StyleSheet } from 'react-native';
import Text from '../components/Text';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Transactions } from '../missing-types';

import theme from '../styles';
import getTransactions from '../data';
import { getDateString, getTransactionString, categoryToIcon } from '../utils';

const RenderTransaction = ({ item, index }) => {
  return (
    <View style={styles.transaction}>
      <View style={styles.iconContainer}>
        <MaterialIcons
          name={categoryToIcon[item.category].icon}
          size={32}
          color={categoryToIcon[item.category].color}
        />
      </View>
      <View style={styles.transactionTextBox}>
        <Text
          type="tiny"
          weight="bold"
          color={theme.colors.purple}
          style={{ marginBottom: 5 }}
        >
          {item.name}
        </Text>
        <Text type="tiny" weight="regular" color={theme.colors.darkGray}>
          {getDateString(item.date)}
        </Text>
      </View>
      <View style={styles.transactionValue}>
        <Text type="small" weight="bold" color={theme.colors.purple}>
          {getTransactionString(item.value)}
        </Text>
      </View>
    </View>
  );
};

const AllTransactions = ({ navigation }) => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // retrieve transactions from AsyncStorage
    // sync activated ? retrieve from Firebase
    // update state and AsyncStorage with online data
    const fetchTransactions = () => {
      const transactions = getTransactions();
      setTransactions(transactions);
    };

    if (transactions.length === 0) {
      fetchTransactions();
    }
  }, [transactions]);

  const updateTransactionsList = ({ type }) => {
    if (type === 'all') {
      return setTransactions([...getTransactions()]);
    }

    console.log('update');

    const filteredTransactions = getTransactions().filter(
      (transaction) => transaction.type === type
    );

    return setTransactions([...filteredTransactions]);
  };

  const onPressFilteringButton = ({ type }) => {
    updateTransactionsList({ type });
    setFilter(type);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Ionicons
          name="chevron-back"
          size={24}
          color={theme.colors.black}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.header}>
        <Pressable
          style={styles.button}
          onPress={() => onPressFilteringButton({ type: 'all' })}
        >
          <Text
            type="tiny"
            weight="regular"
            color={
              filter === 'all' ? theme.colors.violet : theme.colors.lightGray
            }
          >
            All
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => onPressFilteringButton({ type: 'expense' })}
        >
          <Text
            type="tiny"
            weight="regular"
            color={
              filter === 'expense'
                ? theme.colors.violet
                : theme.colors.lightGray
            }
          >
            Expenses
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => onPressFilteringButton({ type: 'income' })}
        >
          <Text
            type="tiny"
            weight="regular"
            color={
              filter === 'income' ? theme.colors.violet : theme.colors.lightGray
            }
          >
            Incomes
          </Text>
        </Pressable>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          data={transactions}
          renderItem={RenderTransaction}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
  backButtonContainer: {
    alignItems: 'flex-start'
  },
  header: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: theme.colors.white
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

export default AllTransactions;
