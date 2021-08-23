import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Styles} from './Styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {isAndroid} from '../../utils/HelperFunctions';
import ErrorBoundary from './components/ErrorBoundry';
import colors from '../../utils/Colors';
import color from '../../common/colors';
import CustomText from './components/CustomText';
import CustomTextInput from './components/CustomTextInput';
import FullButtonComponent from './components/FullButtonComponent';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

const OTPScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const phoneNumber = route.params?.phoneNumber;

  const [otpArray, setOtpArray] = useState(['', '', '', '']);
  const [submittingOtp, setSubmittingOtp] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirm, setConfirm] = useState(null);

  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const fifthTextInputRef = useRef(null);
  const sixthTextInputRef = useRef(null);

  const refCallback = textInputRef => node => {
    textInputRef.current = node;
  };

  useEffect(() => {
    signInWithPhoneNumber();
  }, []);

  async function signInWithPhoneNumber() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      console.log('---->', confirmation);
    } catch (e) {
      alert(JSON.stringify(e));
    }
  }

  async function confirmCode() {
    try {
      const code = otpArray.join('');
      const response = await confirm.confirm(code);
      if (response) {
        navigation.navigate('MainTabScreen');
      }
    } catch (e) {
      alert(JSON.stringify(e));
    }
  }
  const onOtpChange = index => {
    return value => {
      if (isNaN(Number(value))) {
        return;
      }
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);
      if (value !== '') {
        if (index === 0) {
          secondTextInputRef.current.focus();
        } else if (index === 1) {
          thirdTextInputRef.current.focus();
        } else if (index === 2) {
          fourthTextInputRef.current.focus();
        } else if (index === 3) {
          fifthTextInputRef.current.focus();
        } else if (index === 4) {
          sixthTextInputRef.current.focus();
          setSubmittingOtp(false);
        }
      }
    };
  };

  const onOtpKeyPress = index => {
    return ({nativeEvent: {key: value}}) => {
      if (value === 'Backspace' && otpArray[index] === '') {
        if (index === 1) {
          firstTextInputRef.current.focus();
        } else if (index === 2) {
          secondTextInputRef.current.focus();
        } else if (index === 3) {
          thirdTextInputRef.current.focus();
        } else if (index === 4) {
          fourthTextInputRef.current.focus();
        } else if (index === 5) {
          fifthTextInputRef.current.focus();
        }
        if (isAndroid && index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index - 1] = '';
          setOtpArray(otpArrayCopy);
        }
      }
    };
  };

  return (
    <ErrorBoundary screenName={'OTPScreen'}>
      <View style={styles.container}>
        <CustomText style={styles.titleText}>Enter OTP sent to your{' ' + phoneNumber}</CustomText>
        <View style={[Styles.row, Styles.mt12]}>
          {[
            firstTextInputRef,
            secondTextInputRef,
            thirdTextInputRef,
            fourthTextInputRef,
            fifthTextInputRef,
            sixthTextInputRef,
          ].map((textInputRef, index) => (
            <CustomTextInput
              containerStyle={[Styles.fill, Styles.mr12]}
              value={otpArray[index]}
              onKeyPress={onOtpKeyPress(index)}
              onChangeText={onOtpChange(index)}
              keyboardType={'numeric'}
              maxLength={1}
              style={[styles.otpText, Styles.centerAlignedText]}
              autoFocus={index === 0 ? true : undefined}
              refCallback={refCallback(textInputRef)}
              key={index}
            />
          ))}
        </View>
        {errorMessage ? (
          <CustomText
            style={[
              Styles.negativeText,
              Styles.mt12,
              Styles.centerAlignedText,
            ]}>
            {errorMessage}
          </CustomText>
        ) : null}
      </View>
      <View style={[styles.bottom]}>
        <TouchableOpacity onPress={() => confirmCode()}>
          <LinearGradient
            colors={[color.primary, color.primary]}
            style={styles.submit}>
            <Text style={styles.textSubmit}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    paddingTop: 130,
  },
  submitButtonText: {
    color: colors.WHITE,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 19,
  },
  otpText: {
    color: colors.BLUE,
    fontSize: 18,
    width: '100%',
  },
  titleText:{
    fontSize: 18,
  },
  submit: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  textSubmit: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OTPScreen;
