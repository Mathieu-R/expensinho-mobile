import React from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';

import Colors from '../styles/colors';

import Header from '../components/Header';
import Summary from '../components/Summary';
import LastTransactions from '../components/LastTransactions';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={style.container}>
      <Header title="DASHBOARD" subtitle="Here's your financial reports" />
      <Summary />
      <LastTransactions navigation={navigation} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    // width: 100,
    backgroundColor: Colors.background
  }
});

export default Home;
