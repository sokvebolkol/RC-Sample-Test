import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image,FlatList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../common/colors';

const NotificationList = ({notificationList, onPress, ...restProps}) => {
    const ItemDivider = () => (
        <View
          style={{
            height: 15,
          }}
        />
      );
  return (
    <FlatList
      {...restProps}
      data={notificationList}
      keyExtractor={(item, index) => item + index}
      ItemSeparatorComponent={ItemDivider}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={onPress} style={styles.touchContainer}>
            <View style={{paddingHorizontal: wp(2)}}>
              <View style={styles.headContainer}>
                <Image
                  source={require('../assets/img_notification.png')}
                  resizeMode="contain"
                  style={styles.image}
                />
                <Text style={styles.titleText} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
              <Text style={styles.descriptionText} numberOfLines={2}>
                {item.description}
              </Text>
              <View>
                <Text style={styles.timeText} numberOfLines={1}>
                  {item.date}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NotificationList;

const styles = StyleSheet.create({
  touchContainer: {
    width: wp(90),
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.dividerLine,
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: colors.text,
    marginStart: 16,
    fontWeight: 'bold',
  },
  descriptionText: {
    marginTop: wp(1),
    color: colors.inputPlaceholder,
  },
  timeText: {
    color: colors.inputPlaceholder,
    alignSelf: 'flex-end',
    marginTop: wp(2),
  },
  image: {
    width: 20,
    height: 20,
  },
});
