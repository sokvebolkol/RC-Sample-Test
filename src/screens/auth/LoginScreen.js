import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';
import colors from '../../common/colors';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = () => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const navigation = useNavigation();
  const phoneInput = useRef();

  const _handleLogin = () => {
    const checkValid = phoneInput.current?.isValidNumber(value); // length > 10
    setValid(checkValid ? checkValid : false);
    if (valid) {
      navigation.navigate('OTPScreen', {
        phoneNumber: formattedValue,
      });
    } else {
      Alert.alert('Problem', 'Phone number is invalid. Please try again!', [
        {text: 'OK'},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imgLogo}
          source={{
            uri:
              'https://www.logofootball.net/wp-content/uploads/Real-Madrid-CF-Logo.png',
          }}
          width={100}
          height={100}
          resizeMode="contain"
        />
      </View>
      <View style={styles.body}>
        <KeyboardAvoidingView>
          <View style={{alignItems: 'center'}}>
            <PhoneInput
              ref={phoneInput}
              containerStyle={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#646d7e4d',
                backgroundColor: '#fff',
                width: '100%',
              }}
              textContainerStyle={{
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                borderColor: colors.secondary,
                backgroundColor: '#fff',
              }}
              defaultValue={value}
              defaultCode="KH"
              layout="first"
              withShadow={false}
              keyboardType="text"
              autoFocus={true}
              onChangeText={text => {
                setValue(text);
              }}
              onChangeFormattedText={text => {
                setFormattedValue(text);
              }}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.button}>
          <TouchableOpacity onPress={_handleLogin}>
            <LinearGradient
              colors={[colors.primary, colors.primary]}
              style={styles.next}>
              <Text style={styles.textSign}>NEXT</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: 200,
    height: 200,
  },
  body: {
    flex: 1.5,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 50,
  },
  textSign: {
    color: '#fff',
    fontWeight: 'bold',
  },
  next: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
});
