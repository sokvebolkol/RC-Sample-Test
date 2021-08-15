import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, SectionList} from 'react-native';
import HeaderTransaction from '../components/HeaderTransaction';
import PrimaryStatusBar from '../components/PrimaryStatusBar';
import TransactionList from '../components/list/TransactionList';
import Transaction from '../model/transactions';

const AccountScreen = () => {
  const _keyExtractor = item => item.id.toString();
  const _renderHeader = ({section}) => {
    return (
      <View style={styles.title}>
        <Text
          style={{
            color: 'gray',
            marginLeft: 5,
          }}>
          {section.title}
        </Text>
      </View>
    );
  };

  const _renderItem = ({item}) => {
    return <TransactionList transaction={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <PrimaryStatusBar />
      <HeaderTransaction
        deliveryPrice="$200.00"
        driverPrice="$10.00"
        otherFeePrice="$60.00"
        productPrice="$600.00"
        totalBalance="$1000.00"
      />
      <SectionList
        contentContainerStyle={{
          paddingBottom: 60,
          paddingTop: 10,
        }}
        showsVerticalScrollIndicator={false}
        sections={Transaction}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        renderSectionHeader={_renderHeader}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
