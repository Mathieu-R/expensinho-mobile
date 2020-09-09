import React from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';

import Colors from '../styles/colors';

import Header from '../components/Header';
import Summary from '../components/Summary';
import Transactions from '../components/Transactions';

const Home = () => {
  return (
    <SafeAreaView style={style.container}>
      <Header />
      <Summary />
      <Transactions />
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
