import React from 'react';
import { Pressable, FlatList, View, StyleSheet } from 'react-native';
import Text from '../components/Text';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from '../styles';
import transactions from '../data';
import { getDateString, getTransactionString, categoryToIcon } from '../utils';

const sortedTransactions = transactions.sort(
  (a, b) => b.date.getTime() - a.date.getTime()
);

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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.button}>
          <Text type="medium" weight="regular" color={theme.colors.darkGray}>
            All
          </Text>
        </Pressable>
        <Pressable>
          <Text>Expenses</Text>
        </Pressable>
        <Pressable>
          <Text>Incomes</Text>
        </Pressable>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList data={sortedTransactions} renderItem={RenderTransaction} />
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
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    margin: 5,
    padding: 5,
    borderRadius: 15,
    backgroundColor: theme.colors.lightGray
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
