import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Header from '../components/Header';
import DetailsCard from '../components/DetailsCard';

import theme from '../styles';

const Details = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <>
      <Header title="Details" />
      <Pressable style={styles.arrow} onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={24}
          color={theme.colors.white}
        />
      </Pressable>
      <DetailsCard item={item} />
    </>
  );
};

const styles = StyleSheet.create({
  arrow: {
    position: 'absolute',
    top: 5,
    left: 5,
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'none'
  }
});

export default Details;
