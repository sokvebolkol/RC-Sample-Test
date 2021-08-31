import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../common/colors';
import Icon from 'react-native-vector-icons/Feather';
import WaitingDelivery from 'react-native-vector-icons/MaterialIcons';
import Call from 'react-native-vector-icons/Ionicons';

import waitingMessageData from '../model/waitingMessageData';

const WaitingMessageSheet = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://cdn.freebiesupply.com/logos/large/2x/real-madrid-c-f-logo-png-transparent.png',
          }}
        />
        <View style={{width: 200, justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            {waitingMessageData.operator}
          </Text>
          <Text style={{color: colors.placeholder, paddingVertical: 5}}>
            {waitingMessageData.phone}
          </Text>
          <Text style={{color: colors.placeholder}}>
            {waitingMessageData.address}
          </Text>
        </View>
      </View>
      <View style={styles.message}>
        <View style={{flexDirection: 'row'}}>
          {waitingMessageData.confirm ? (
            <>
              <WaitingDelivery
                name="pending-actions"
                size={20}
                color="orange"
              />
              <Text
                style={{color: 'orange', paddingHorizontal: 5}}
                numberOfLines={1}>
                {waitingMessageData.confirmMessage}
              </Text>
            </>
          ) : (
            <>
              <Icon name="zap" size={20} color="orange" />
              <Text
                style={{color: 'orange', paddingHorizontal: 5}}
                numberOfLines={1}>
                {waitingMessageData.message}
              </Text>
            </>
          )}
        </View>
        {!waitingMessageData.confirm ? (
          <TouchableOpacity style={styles.btnCancel}>
            <Text style={styles.cancelTxt}>Cancel</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              width: 50,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Call name="call" size={20} color="green" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default WaitingMessageSheet;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderTopWidth: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderTopColor: colors.dividerLine,
    height: 180,
    backgroundColor: colors.placeholderBackground,
    paddingVertical: 15,
  },
  image: {
    width: 100,
    height: 100,
    // backgroundColor: '#fff',
  },
  message: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  btnCancel: {
    backgroundColor: colors.status.pickup,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
  },
  cancelTxt: {
    color: '#fff',
  },
});
