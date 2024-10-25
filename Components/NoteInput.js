import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../styles/styles';

const NoteInput = ({ addNote }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new note"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Add" onPress={() => {
        addNote(inputValue);
        setInputValue('');
      }} />
    </View>
  );
};

export default NoteInput;
