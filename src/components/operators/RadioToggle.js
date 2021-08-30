import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import colors from '../../common/colors'

const RadioToggle = ({ isChecked, onChecked }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChecked?.(!isChecked)}>
      <View
        style={{
          width: 24,
          height: 24,
          borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isChecked ? colors.primary : 'white',
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: isChecked ? 'white' : 'transparent',
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RadioToggle;
