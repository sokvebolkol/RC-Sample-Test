import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const DeliveryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Delivery Screen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
