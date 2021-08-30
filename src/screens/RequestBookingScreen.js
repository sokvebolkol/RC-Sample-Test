import React, {useCallback, useState, useRef, useMemo,createRef} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import RequestAddress from '../components/RequestAddress';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../common/colors';
import OperatorListItem from '../components/operators/OperatorListItem';
import Modal from "react-native-modal";

const _ref = createRef();
const RequestBookingScreen = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const val = useRef();
  const operatorSheet = useRef();
  const imageUploader = useRef();
  const expressSwitcher = useRef();
  const [isExpress, setIsExpress] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [qty, setQty] = useState('3');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const handleValidated = useCallback(({validated}) => {
    if (validated) {
      ProgressModal.show();
      requestAnimationFrame(() => {
        //   dispatch(checkActivatedOperator());
      });
      ProgressModal.hide();
    }
  });

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <RequestAddress />
      <View style={{paddingHorizontal: 20}}>
        <TextInput
          style={{
            height: 50,
            borderColor: 'gray',
            borderWidth: 1,
            placeholderTextColor: 'gray',
            borderRadius: 25,
            paddingHorizontal: 20,
            marginVertical: 20,
          }}
          onChangeText={text => setTextInputValue(text)}
          value={textInputValue}
          placeholder="Total packages :"
        />
        <TextInput
          style={{
            height: 150,
            borderColor: 'gray',
            borderWidth: 1,
            placeholderTextColor: 'gray',
            borderRadius: 25,
            padding: 20,
          }}
          multiline={true}
          numberOfLines={4}
          onChangeText={text => setTextInputValue(text)}
          value={textInputValue}
          placeholder="Description"
        />
        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 15,
            marginVertical: 20,
          }}>
          <Text style={{fontWeight: 'bold'}}>
            After you click on the booking:
          </Text>
          <Text>1, Auto send us your request information</Text>
          <Text>2, Call center will contact you soon</Text>
          <Text>3, Driver will go to pick up on time </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
          <TouchableOpacity onPress={() => setVisible(true)} >
            <LinearGradient
              colors={[colors.primary, colors.primary]}
              style={{
                width: '100%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                flexDirection: 'row',
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                BOOK NOW
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{paddingHorizontal:20}}>
          <Text style={{fontWeight: 'bold', fontSize:25}}>$.1.00 </Text>
          <Text style={{color:colors.inputPlaceholder}}>Per package</Text>
          </View>
        </View>
          {/* <OperatorListItem/> */}
          <Modal isVisible={isVisible}>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
      </View>
    </SafeAreaView>
  );
};

export default RequestBookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  textInput: {
    minHeight: 150,
  },
  textInputContainer: {
    marginTop: 16,
  },
  bottom: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    bottom: 0,
    backgroundColor: '#fff',
    width: '100%',
    height: 150,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 4,
  },
});
