import React, {memo} from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/core';
import colors from '../common/colors';

const imgNotification = require('../assets/notification_unread/notification_unread.png');
const imgMessage = require('../assets/ic_messenger.png');

const BrandingHeadBar = memo(() => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  return (
    <View style={styles.container} edges={['top']}>
      <Text style={styles.logoText}>Delivery</Text>
      <View style={styles.topRightIcon}>
        <TouchableOpacity
          onPress={() => navigation.navigate('More')}
          style={styles.bgAvatar}>
          <Image
            source={{
              uri:
                'https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1',
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>navigation.navigate('Notification')}>
          <Image source={imgNotification} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={imgMessage} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default BrandingHeadBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
  },
  logoText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.primary,
  },
  topRightIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
    justifyContent: 'space-between',
  },
  bgAvatar: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 23,
  },
  avatar: {
    width: 36,
    height: 36,
    padding: 5,
    resizeMode: 'contain',
    borderRadius: 18,
  },
  image: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    padding: 5,
    marginHorizontal: 5,
  },
});
