import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HistoryPaymentList from '../components/list/HistoryPaymentList';
import PaymentList from '../model/historyTransactionsList';

const HistoryScreen = () => {
  const navigation = useNavigation();
  const _handlePress = () => {
    navigation.navigate("PaymentList");
  }

  return (
    <View style={styles.container}>
       <HistoryPaymentList
        paymentList={PaymentList}
        // shouldShowProgressIndicator={showLoadingIndicator}
        // shouldShowFailIndicator={isFail}
        // onRefresh={refresh}
        // onScrollEndReached={loadMore}
        contentContainerStyle={{
          // paddingBottom: bottomTabBarHeight + 4,
        }}
        onPress={_handlePress}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
