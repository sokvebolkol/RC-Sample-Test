import React, { memo, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AddressView from '../components/AddressView';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import colors from '../common/colors';

const RequestAddress = memo(() => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const handlePress = useCallback(() => {
    alert("hello world")
  });

  return (
    <View style={styles.container}>
      <AddressView title='Pick up address' address='2004, St Phnom Penh, Cambodia' label='Passerelles Numberiques' labelName= 'Passerrelles Numeriques' onPress={handlePress} />
    </View>
  );
});

export default RequestAddress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: 4,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
});
