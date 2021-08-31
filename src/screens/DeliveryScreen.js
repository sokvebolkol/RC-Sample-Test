import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DeliveryListItem from '../components/list/DeliveryListItem';

import MOCK_DATA from '../model/deliveryMockData';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const _handlePress = () => {
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}>
       <DeliveryListItem
        paymentList={MOCK_DATA}
        contentContainerStyle={{
        }}
        onPress={_handlePress}
      />
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
