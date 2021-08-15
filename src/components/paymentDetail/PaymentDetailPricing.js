import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import DashLineDivider from './DashLineDivider';

const RecordItem = ({ label, value, valueColor, boldText, marginBottom, marginTop }) => {
  return (
    <View
      style={[
        styles.list,
        {
          marginTop: marginTop ? 10 : 0,
          marginBottom: marginBottom ? 10 : 0,
        },
      ]}>
      <Text
        style={[
          styles.label,
          boldText && {
            fontWeight: 'bold',
          },
        ]}>
        {label}
      </Text>
      <Text
        style={[
          styles.amount,
          valueColor && { color: valueColor },
          boldText && {
            fontWeight: 'bold',
          },
        ]}>
        {value}
      </Text>
    </View>
  );
};

const PaymentDetailPricing = memo(() => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 50,
          justifyContent: 'center',
        }}>
        <Text style={styles.title}>payment-detail.text.payment-detail</Text>
      </View>
      <RecordItem label='payment-detail.text.total-cod' value={'data.cod'} marginBottom />
      <RecordItem
        label='payment-detail.text.total-delivery-fee'
        value={"data.deliveryFee"}
        valueColor="red"
        marginBottom
      />
      <RecordItem
        label={t('payment-detail.text.total-commission-fee')}
        value={"data.commissionFee"}
        valueColor="red"
        marginBottom
      />
      {/* <RecordItem label={t('payment-detail.text.other-fee')} value={data.otherFee} valueColor="red" marginBottom /> */}
      {/* <DashLineDivider /> */}
      {/* <RecordItem
        label={t('payment-detail.text.transfer-money')}
        value={data.transferMoney}
        valueColor="#48DC6A"
        boldText
        marginTop
      /> */}
    </View>
  );
});

export default PaymentDetailPricing;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 13,
    paddingBottom: 16,
    backgroundColor: 'white',
  },
  title: {
    ...Styles.largeText,
    fontWeight: 'bold',
  },
  label: {
    ...Styles.text,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    ...Styles.text,
  },
});
