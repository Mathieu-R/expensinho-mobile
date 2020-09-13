import React from 'react';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';
import theme from '../styles';
import Text from './Text';

type TextInputProps = {
  label: string;
};

const TextInput = ({ label, ...props }: TextInputProps) => {
  return (
    <View style={styles.container}>
      <Text type="tiny" weight="regular" color={theme.colors.lightGray}>
        {label}
      </Text>
      <RNTextInput
        autoFocus
        clearButtonMode="while-editing"
        style={styles.input}
        {...props}
      />
      <View style={styles.border}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  input: {
    paddingVertical: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: theme.colors.darkGray
  },
  border: {
    borderBottomColor: theme.colors.darkGray,
    borderBottomWidth: 1
  }
});

export default TextInput;
