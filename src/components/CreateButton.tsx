import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';

import theme from '../styles';

const CreateButton = ({ navigation }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate('CreateTransaction')}
    >
      <Text type="tiny" weight="regular" color={theme.colors.white}>
        +
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: 5,
    bottom: 5,
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: theme.colors.violet
  }
});

export default CreateButton;
