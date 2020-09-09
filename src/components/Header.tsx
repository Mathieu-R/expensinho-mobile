import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Text from './Text';
import theme from '../styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text type="title" weight="bold" style={{ marginBottom: 5 }}>
        DASHBOARD
      </Text>
      <Text type="tiny" weight="bold" color={'rgba(255,255,255,0.5)'}>
        Here's your financial reports
      </Text>
      <View style={styles.balanceContainer}>
        <Text type="medium" weight="bold" color={theme.colors.white}>
          Balance
        </Text>
        <View style={styles.balance}>
          <Text type="large" weight="bold" color={theme.colors.white}>
            € 240
          </Text>
          <View style={styles.percentage}>
            <MaterialIcons
              name="arrow-drop-up"
              size={24}
              color={theme.colors.purple}
            />
            <Text type="small" weight="bold" color={theme.colors.purple}>
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
    backgroundColor: theme.colors.violet
  },
  balanceContainer: {
    width: 100,
    height: 200,
    marginTop: 35
  },
  balance: {
    flexDirection: 'row',
    marginTop: 10
  },
  percentage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 10,
    paddingLeft: 5,
    borderRadius: 7,
    backgroundColor: theme.colors.white
  }
});

export default Header;
