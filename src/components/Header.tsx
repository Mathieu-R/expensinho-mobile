import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Text from './Text';
import theme from '../styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text type="title" weight="bold" style={{ marginBottom: 5 }}>
        Dashboard
      </Text>
      <Text type="small" weight="light" color={theme.colors.lightGray}>
        Here'sTextyour financial report
      </Text>
      <View style={styles.balanceContainer}>
        <Text type="medium" weight="bold" color={theme.colors.darkGray}>
          Balance
        </Text>
        <View style={styles.balance}>
          <Text type="large" weight="bold" color={theme.colors.purple}>
            € 240
          </Text>
          <View style={styles.percentage}>
            <Ionicons name="md-arrow-dropup" size={24} color="white" />
            <Text type="small" weight="light">
              15%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 15,
    height: 300,
    backgroundColor: theme.colors.violet,
    width: 100
  },
  balanceContainer: {
    width: 100,
    height: 200,
    padding: 10
  },
  balance: {
    flexDirection: 'row',
    marginTop: 10
  },
  percentage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.violet
  }
});

export default Header;
