import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import MenuItem from '../../components/MenuItem';
import {ms} from 'react-native-size-matters';
import colors from '../../common/colors';
import images from '../../common/images';

const MoreScreen = () => {
  const _menuItems = [
    {
      title: 'Policy',
      getImage: images.privacy,
      onPress: navigation => {
        navigation.navigate('Main', {
          screen: 'PrivacyPolicy',
        });
      },
    },
    {
      title: 'About',
      getImage: images.about,
      onPress: navigation => {
        navigation.navigate('Main', {
          screen: 'About',
        });
      },
    },
    {
      title: 'Contact',
      getImage: images.contact,
      onPress: navigation => {
        navigation.navigate('Main', {
          screen: 'Contact',
        });
      },
    },
    {
      title: 'Logout',
      isPrivate: true,
      getImage: images.logout,
      onPress: navigation => {
        alert('Hello world');
      },
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <View style={styles.topSpace} />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          height: ms(100),
          borderRadius: 40,
        }}>
        <View style={styles.scrollContainer}>
        <View style={styles.profile}>
          <TouchableOpacity
            style={styles.bgAvatar}>
            <Image
              source={{
                uri:
                  'https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1',
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
            <View style={{justifyContent: 'center', marginLeft:ms(20)}}>
            <Text style={{color:colors.placeholder}}>Welcome</Text>
            <Text style={{fontWeight:'bold', color:colors.status.pickup, paddingVertical:ms(4)}}>Kol Sokvebol</Text>
            <Text style={{color:colors.placeholder}}>Phone number : 090618443</Text>
            </View>
        </View>
          <ScrollView bounces={true}>
            <View style={styles.menuItemContainer}>
              {_menuItems.map(_renderMenuItem)}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

_renderMenuItem = (menuItem, index) => {
  return (
    <MenuItem
      key={index}
      leadingImage={menuItem.getImage()}
      title={menuItem.title}
      hasDividerLine
      onPress={() => menuItem.onPress(navigation)}
    />
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  topSpace: {
    height: 18,
    backgroundColor: colors.primary,
  },
  profile: {
    padding:ms(15),
    flexDirection: 'row',
  },
  scrollContainer: {
    flex: 1,
    marginTop: 27,
  },
  menuItemContainer: {
    paddingHorizontal: 14,
    marginTop: ms(10),
  },
  arrowIcon: {
    fontSize: 18,
    color: colors.placeholder,
    width: 220,
    marginLeft: 13,
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth:3,
    borderColor: colors.primary,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 25,
  },
});
