import react, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [userEntry, setUserEntry] = useState('');

  const readText = () => {
    if (userEntry !== '') {
      Speech.speak(userEntry);
      setUserEntry('')
    } else {
      Speech.speak('Please enter some text to read');
      alert('Please enter some text to read');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: '75%', height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setUserEntry(text)}
        value={userEntry}
      />

      <Button
        title="PRESS TO HEAR TEXT"
        onPress={readText}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
