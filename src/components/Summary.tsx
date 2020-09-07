import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Text from './Text';
import colors from '../styles/colors';

const Summary = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.box}>
        <Ionicons name="md-trending-down" size={24} color={colors.violet} />
        <View style={styles.details}>
          <Text type="small" color={colors.darkGray}>
            Expense
          </Text>
          <Text type="medium" weight="bold" color={colors.purple}>
            € 1250
          </Text>
        </View>
      </Pressable>
      <Pressable style={styles.box}>
        <Ionicons name="md-trending-up" size={24} color={colors.violet} />
        <View style={styles.details}>
          <Text type="small" color={colors.darkGray}>
            Income
          </Text>
          <Text type="medium" weight="bold" color={colors.purple}>
            € 1500
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: -75,
    margin: 10,
    padding: 25,
    height: 150,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 7
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
