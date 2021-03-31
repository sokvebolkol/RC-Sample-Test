
import React, {useState} from 'react';
import getDirections from 'react-native-google-maps-directions'

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const App = () => {

 const handleGetDirections = () => {

    const data = {
       source: {
        latitude: 11.544451,
        longitude: 104.865837,
      },
      destination: {
        latitude: 11.569035,
        longitude: 104.895357,
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      // waypoints: [
      //   {
      //     latitude: 11.544451,
      //     longitude: 104.865837,
      //   },
      //   {
      //     latitude: 11.569035,
      //     longitude: 104.895357,
      //   },
      // ]
    }
 
    getDirections(data)
  }

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
        <Button onPress={handleGetDirections} title="Get Directions" />
      </View>
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