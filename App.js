
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FBSearchBar from './src/components/FBSearchBar';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <FBSearchBar/>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
});