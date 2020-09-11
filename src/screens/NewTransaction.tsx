import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import Text from '../components/Text';
import Header from '../components/Header';

import { CATEGORIES } from '../utils/constants';
import theme from '../styles';

const NewTransaction = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<React.ReactText>('');
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
      <View>
        <View>
          <Text>Name</Text>
          <TextInput onChange={onNameChange} />
        </View>
        <View>
          <Text>Description</Text>
          <TextInput onChange={onDescriptionChange} />
        </View>
        <View>
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
        <View>
          <Text>Date</Text>
          <DateTimePicker value={currentDate} onChange={onDateChange} />
        </View>
        <View>
          <Text>Value</Text>
          <TextInput onChange={onTransactionValueChange} />
        </View>
        <Button title="Add transaction" style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
