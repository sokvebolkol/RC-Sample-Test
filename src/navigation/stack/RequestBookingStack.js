import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RequestBookingScreen from '../../screens/RequestBookingScreen';
import colors from '../../common/colors';

const Stack = createStackNavigator();

const RequestBookingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          shadowColor: 'transparent'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#fff',
        },
      }}>
      <Stack.Screen
        name="Request"
        component={RequestBookingScreen}
        options={{
          title: 'Request Booking',
          headerTintColor: '#fff',
          fontWeight: 'bold',
        }}
      />
    </Stack.Navigator>
  );
};

export default RequestBookingStack;
