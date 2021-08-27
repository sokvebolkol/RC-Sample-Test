import React, {memo, useCallback} from 'react';
import {TouchableOpacity,Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../common/colors';
import ProgressModal from './ProgressModal';

const RequestButton = memo(() => {

  const navigation = useNavigation();
  const _handleRequest = () =>{
      ProgressModal.show();
    navigation.navigate('MainStack');
  };

  return (
    <TouchableOpacity onPress={_handleRequest}>
      <LinearGradient
        colors={[colors.primary, colors.primary]}
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          flexDirection: 'row',
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>REQUEST PICKUP</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
});

export default RequestButton;
