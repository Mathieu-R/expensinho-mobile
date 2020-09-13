import React, { useState } from 'react';
import { Button, StyleSheet, Switch, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import Text from '../components/Text';
import TextInput from '../components/TextInput';
import Header from '../components/Header';
import theme from '../styles';

import { CATEGORIES } from '../utils/constants';

const NewTransaction = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<React.ReactText>('');
  const [subscription, setSubscription] = useState(false);
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState(0);

  const currentDate = new Date();

  const onNameChange = (name) => {
    setName(name);
  };

  const onDescriptionChange = (description) => {
    setDescription(description);
  };

  const onCategoryChange = ({ itemValue, itemIndex }) => {
    setCategory(itemValue);
  };

  const onSubscriptionChange = () => {
    setSubscription((state) => !state);
  };

  const onDateChange = (evt, date) => {
    setDate(date);
  };

  const onTransactionValueChange = (value) => {
    setValue(value);
  };

  const addTransaction = () => {};

  return (
    <View>
      <Header title="ADD TRANSACTION" />
      <View style={styles.formContainer}>
        <TextInput label="Enter Transaction Name" onChange={onNameChange} />
        <TextInput label="Description" onChange={onDescriptionChange} />
        <View style={{ flexDirection: 'column' }}>
          <Text>Category</Text>
          <Picker
            selectedValue={CATEGORIES[0]}
            style={{ height: 50, width: 100 }}
            onValueChange={onCategoryChange}
          >
            {CATEGORIES.map((category) => (
              <Picker.Item label={category} value={category} />
            ))}
          </Picker>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Subscription</Text>
          <Switch onValueChange={onSubscriptionChange} value={subscription} />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text>Date</Text>
          <DateTimePicker value={currentDate} onChange={onDateChange} />
        </View>
        <TextInput
          label="Transaction Value"
          keyboardType="numeric"
          onChange={onTransactionValueChange}
        />
        <Button title="Add transaction" style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 5,
    flexDirection: 'column'
  },
  button: {
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: theme.colors.white,
    backgroundColor: theme.colors.violet
  }
});

export default NewTransaction;
