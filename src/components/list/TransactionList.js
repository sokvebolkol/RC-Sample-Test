import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';

const TransactionList = ({ transaction, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.title}>
        <View>
          <Text style={styles.titleText}>{transaction.name}</Text>
        </View>
        <View style={styles.amount}>
          <Text style={[styles.titleAmount, transaction.amount < 0 ? styles.negativeAmount : null]} numberOfLines={1}>
            {transaction.amount}
          </Text>
        </View>
      </View>
      <Text style={styles.time}>{moment(transaction.time, 'HH:mm A').format('HH:mm A')}</Text>
    </TouchableOpacity>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#ffff',
    borderBottomColor: '#dddd',
    borderBottomWidth: 0.5,
  },
  title: {
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 5,
  },
  titleText: {
  },
  amount: {
    marginLeft: 'auto',
  },
  titleAmount: {
    fontWeight: 'bold',
    color: 'green',
  },
  negativeAmount: {
    color: 'red',
  },
  date: {
    paddingHorizontal: 13,
  },
  time: {
    color:'gray',
    marginHorizontal: 13,
    alignSelf: 'flex-end',
  },
});
