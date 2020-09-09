import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Text from './Text';
import theme from '../styles';

const Summary = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.box}>
        <View style={styles.details}>
          <Text type="tiny" color={theme.colors.black}>
            Expense
          </Text>
          <Text type="medium" weight="bold" color={theme.colors.purple}>
            € 1250
          </Text>
        </View>
      </Pressable>
      <View style={styles.separation}></View>
      <Pressable style={styles.box}>
        <View style={styles.details}>
          <Text type="tiny" color={theme.colors.black}>
            Income
          </Text>
          <Text type="medium" weight="bold" color={theme.colors.purple}>
            € 1500
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -75,
    margin: 10,
    padding: 25,
    height: 150,
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 7
  },
  separation: {
    height: '50%',
    width: 3,
    margin: 30,
    alignSelf: 'center',
    backgroundColor: theme.colors.violet
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Summary;
