import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image, Text } from 'react-native';
import RadioToggle from './RadioToggle';
import colors from '../../common/colors'

export const MAX_HEIGHT = 57;

const OperatorListItem = ({ name, logo, isSelected, onPress, showLineDivider }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            borderBottomWidth: showLineDivider ? 1 : 0,
          },
        ]}>
        <Image source={{uri:'https://logos-world.net/wp-content/uploads/2020/06/PSG-emblem.png'}} style={styles.image} />
        <Text style={styles.name} numberOfLines={1}>
          {"name"}
        </Text>
        <RadioToggle isChecked={isSelected} onChecked={onPress} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OperatorListItem;

const styles = StyleSheet.create({
  container: {
    height: MAX_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.dividerLine,
    backgroundColor: colors.primary,
  },
  image: {
    width: 50,
    height: 50,
  },
  name: {
    marginHorizontal: 13,
    flexGrow: 1,
    flexShrink: 1,
  },
});
