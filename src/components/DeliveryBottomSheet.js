import React, { useMemo, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RequestButton from './RequestButton';
// import CurrentLocationButton from '@app/components/buttons/CurrentLocationButton';
// import Geolocation from 'react-native-geolocation-service';
// import CurrentPickupLocationButton from './CurrentPickupLocationButton';

const DeliveryBottomSheet = ({ map }) => {
    const isBookingConfirmed = false;
    const hasBooking = false;

  return (
    <View style={styles.container} pointerEvents="box-none">
      {/* <CurrentLocationButton style={styles.btnLocation} onPress={snapCurrentLocation} /> */}
      {/* { hasBooking ? (
        <View
          style={[
            styles.frame,
            {
              paddingBottom,
            },
          ]}>
          {isBookingConfirmed ? <DeliveryProgressContent map={map} /> : <DeliveryConfirmContent />}
        </View>
      ) : ( */}
        <View
          style={{
            marginBottom: 15,
            paddingHorizontal:15,
          }}>
          <RequestButton />
          </View>
        {/* )} */}
    </View>
  );
};

export default DeliveryBottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  btnLocation: {
    alignSelf: 'flex-end',
    marginRight: 16,
    marginBottom: 16,
  },
  frame: {
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: 'white',
  },
});
