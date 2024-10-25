import React, { useState, useEffect } from 'react';
import { View, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteInput from './components/NoteInput';
import NoteItem from './components/NoteItem';
import styles from './styles/styles';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const loadNotes = async () => {
      const storedNotes = await AsyncStorage.getItem('notes');
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    };
    loadNotes();
  }, []);

  const addNote = async (note) => {
    if (!note) {
      Alert.alert('Error', 'Please enter a note!');
      return;
    }
    const newNotes = [...notes, { id: Math.random().toString(), title: note }];
    setNotes(newNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
  };

  const removeNote = async (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
  };

  return (
    <View style={styles.container}>
      <NoteInput addNote={addNote} />
      <FlatList
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <NoteItem item={item} removeNote={removeNote} />
        )}
      />
    </View>
  );
};

export default App;
