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

const DeliveryListItem = ({paymentList, onPress, ...restProps}) => {
  return (
    <FlatList
      {...restProps}
      data={paymentList}
      keyExtractor={(item, index) => item + index}
      ItemSeparatorComponent={ItemDivider}
      showsVerticalScrollIndicator={false}
      s
      contentContainerStyle={{
        padding: 15,
      }}
      renderItem={({item}) => {
        return (
          <View style={styles.body}>
            <View style={styles.header}>
              <Text>{item.cod}</Text>
              {item.operator.status === 'Close' ? (
                <Text style={{color: 'red'}}>{item.operator.status}</Text>
              ) : (
                <Text style={{color: colors.primary}}>
                  {item.operator.status}
                </Text>
              )}
            </View>
            <TouchableOpacity
              style={styles.container}
              onPress={() => onPress?.(item)}>
              <Image source={{uri: item.operator.image}} style={styles.image} />
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 16,
                }}>
                <Text style={styles.locationTxt} numberOfLines={1}>
                  Location
                </Text>
                <Text style={styles.txtDateTime} numberOfLines={1}>
                  {item.operator.location}
                </Text>
                <View style={{height: 10}} />
                <Text style={styles.locationTxt} numberOfLines={1}>
                  Phone number
                </Text>
                <Text style={styles.txtDateTime} numberOfLines={1}>
                  {item.phone}
                </Text>
              </View>

              <Text style={styles.amount}>{item.amount}</Text>
              <Icon name="md-chevron-forward" style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default DeliveryListItem;

const styles = StyleSheet.create({
  body: {
    width: wp(90),
    height: wp(40),
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: colors.placeholder,
    borderBottomWidth: 0.5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: wp(25),
  },
  image: {
    width: 70,
    height: 70,
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
  locationTxt: {
    marginBottom: 7,
    fontSize: 10,
    color: colors.placeholder,
  },
  txtDateTime: {
    fontSize: 14,
  },
});
