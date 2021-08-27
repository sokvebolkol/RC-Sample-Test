import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NotificationList from '../../components/NotificationList';
import notificationList from '../../model/notificationList';


const NotificationScreen = () => {

    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <NotificationList notificationList={notificationList} onPress={()=>navigation.navigate('NotificationDetail')}/>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
