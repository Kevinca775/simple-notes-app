import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';

const NoteItem = ({ item, removeNote }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
      <Button title="Delete" onPress={() => removeNote(item.id)} />
    </View>
  );
};

export default NoteItem;
