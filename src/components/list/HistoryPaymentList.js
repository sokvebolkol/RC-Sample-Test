import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../common/colors';

const ItemDivider = () => (
  <View
    style={{
      height: 15,
    }}
  />
);

const HistoryPaymentList = ({paymentList, onPress, ...restProps}) => {
  return (
    <FlatList
      {...restProps}
      data={paymentList}
      keyExtractor={(item, index) => item + index}
      ItemSeparatorComponent={ItemDivider}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.container}
            onPress={() => onPress?.(item)}>
            <Image source={{uri: item.operator.image}} style={styles.image} />
            <View
              style={{
                flex: 1,
                paddingHorizontal: 16,
              }}>
              <Text style={styles.textName} numberOfLines={1}>
                {item.operator.name}
              </Text>
              <Text style={styles.txtDateTime} numberOfLines={1}>
                {item.date}
              </Text>
            </View>

            <Text style={styles.amount}>{item.amount}</Text>
            <Icon name="md-chevron-forward" style={styles.arrowIcon} />
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default HistoryPaymentList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
    height: wp(20),
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: 42,
    height: 42,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowIcon: {
    fontSize: 18,
    color: colors.placeholder,
    marginLeft: 13,
  },
  textName: {
    marginBottom: 7,
  },
  txtDateTime: {
    fontSize:12,
    color: colors.placeholder,
  },
});
