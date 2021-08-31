import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  View,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import RequestAddress from '../components/RequestAddress';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../common/colors';
import ActionSheet from 'react-native-actionsheet';

const RequestBookingScreen = () => {
  
  let actionSheet = useRef();
  const [textInputValue, setTextInputValue] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();
  const [showLoading, setIsShowLoading] = useState(false);

  const _handleShowActionSheet = () => {
    actionSheet.current.show();
  };

  const _handleSelectOperator = () => {
    setIsShowLoading(true);
  };

  useEffect(() => {
    if (showLoading) {
      setTimeout(() => {
        setIsShowLoading(false);
      }, 3000);
      navigation.navigate('Home', {
        id: 1,
        booking: true,
      });
    }
  });

  return (
    <>
      {!showLoading ? (
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
              onChangeText={text => setDescription(text)}
              value={description}
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
              <TouchableOpacity onPress={_handleShowActionSheet}>
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
              <View style={{paddingHorizontal: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 25}}>$.1.00 </Text>
                <Text style={{color: colors.inputPlaceholder}}>
                  Per package
                </Text>
              </View>
            </View>
            <View>
              <ActionSheet
                ref={actionSheet}
                title={'SELECT OPERATOR NAME'}
                options={[
                  'Seth Express',
                  'Virak Express',
                  'Real Madrid Express',
                  'Naga Express',
                  'NG Express',
                  'Messi Express',
                  'Ronaldo Express',
                  'Cancel',
                ]}
                cancelButtonIndex={7}
                destructiveButtonIndex={7}
                onPress={_handleSelectOperator}
              />
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color={colors.inputPlaceholder} />
        </View>
      )}
    </>
  );
};

export default RequestBookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
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
