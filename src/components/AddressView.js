import React, { memo } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Location from 'react-native-vector-icons/Entypo';
import colors from '../common/colors';

const HEIGHT = 75;

const AddressView = memo(({ title, labelName, address, style, numberOfLines, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, StyleSheet.flatten(style)]}>
        <View style={styles.leftContainer}>
          <Location name="location" size={25} style={{
              color:'orange',
          }} />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.txtTitle}>{title}</Text>
          {labelName === address ? (
            <Text style={styles.txtAddress} numberOfLines={numberOfLines}>
              {address ?? '...'}
            </Text>
          ) : (
            <>
              <Text style={[styles.txtTitle, { fontWeight: 'bold', width: 200 }]}>{labelName ?? '...'}</Text>
              <Text style={styles.txtAddress} numberOfLines={numberOfLines}>
                {address ?? '...'}
              </Text>
            </>
          )}
        </View>
        <View style={styles.rightContainer}>
          <Icon name="md-chevron-forward" style={styles.arrowIcon} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});

export default AddressView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: HEIGHT / 2,
    minHeight: HEIGHT,
    backgroundColor: 'white',
  },
  leftContainer: {
    paddingLeft: 21,
    paddingRight: 12,
    justifyContent: 'center',
    height: HEIGHT,
  },
  middleContainer: {
    flex: 1,
    paddingTop: 16.5,
    paddingBottom: 16.5,
    flexShrink: 1,
  },
  rightContainer: {
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingEnd: 16,
    paddingLeft: 12,
  },
  arrowIcon: {
    fontSize: 18,
    color: colors.placeholder,
    marginLeft: 13,
  },
  txtTitle: {
    fontSize: 13,
  },
  txtAddress: {
    marginTop: 6,
  },
});
