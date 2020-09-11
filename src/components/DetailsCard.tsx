import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../styles';

import Text from './Text';
import { categoryToIcon } from '../utils';
import format from 'date-fns/format';

const DetailsCard = ({ item }) => {
  const { name, description, category, value, date } = item;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name={categoryToIcon[category].icon}
          color={categoryToIcon[category].color}
          size={32}
          style={styles.icon}
        />
      </View>
      <Text
        type="small"
        weight="regular"
        color={theme.colors.lightGray}
        style={{ margin: 15 }}
      >
        {name}
      </Text>
      <Text type="medium" weight="bold" color={theme.colors.black}>
        {value}
      </Text>
      {description && (
        <View style={styles.description}>
          <Text type="tiny" weight="regular" color={theme.colors.white}>
            {description}
          </Text>
        </View>
      )}
      <Text type="small" weight="bold" color={theme.colors.darkGray}>
        DATE
      </Text>
      <View style={styles.separation} />
      <Text type="tiny" weight="regular" color={theme.colors.darkGray}>
        {format(date, 'dd mm yyyy', { weekStartsOn: 1 })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.white
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -8,
    padding: 7,
    borderRadius: 50,
    backgroundColor: theme.colors.white
  },
  icon: {},
  description: {
    margin: 15,
    padding: 10,
    borderRadius: 15,
    backgroundColor: theme.colors.purple
  },
  separation: {
    marginVertical: 5,
    marginHorizontal: 10,
    height: 1,
    backgroundColor: theme.colors.lightGray
  }
});

export default DetailsCard;
