import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../common/colors';

const HeaderTransaction = ({
  deliveryPrice,
  driverPrice,
  productPrice,
  totalBalance,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Text style={styles.text} numberOfLines={1}>
          Balance
        </Text>
        <Text style={styles.deliverFee}>Delivery Fee</Text>
        <Text style={styles.fee} numberOfLines={1}>
          {deliveryPrice}
        </Text>
      </View>
      <View
        style={[
          styles.title,
          {
            alignItems: 'center',
          },
        ]}>
        <Text style={styles.totalBalance}>{totalBalance}</Text>
        <Text style={styles.deliverFee}>Commission Fee</Text>
        <Text style={styles.fee}>{driverPrice}</Text>
      </View>
      <View style={styles.title}>
        <Text
          style={[
            styles.text,
            {
              opacity: 0.8,
              color: colors.placeholderBackground,
            },
          ]}>
          Product
        </Text>
        <Text style={styles.productPrice}>{productPrice}</Text>
      </View>
    </View>
  );
};

export default HeaderTransaction;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    paddingBottom: 20,
  },
  title: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 16,
    alignItems: 'center',
  },
  deliverFee: {
    color: colors.placeholderBackground,
    marginLeft: 'auto',
    paddingRight: 5,
    opacity: 0.8,
  },
  totalBalance: {
    fontSize: 24,
    color: colors.placeholderBackground,
    fontWeight: 'bold',
  },
  productPrice: {
    paddingLeft: 10,
    color: colors.placeholderBackground,
    opacity: 0.8,
  },
  text: {
    color: 'white',
    flexShrink: 1,
  },
  fee: {
    color: 'white',
    flexShrink: 1,
    minWidth: 60,
    textAlign: 'right',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 4,
    marginLeft: 'auto',
    shadowColor: 'rgba(0,0,0, .1)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    height: 30,
    width: 100,
    flexDirection: 'row',
  },
});
