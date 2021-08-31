import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DeliveryDetailScreen from '../../screens/detail/DeliveryDetailScreen';
import colors from '../../common/colors';

const Stack = createStackNavigator();

const DetailDeliveryStack = () => {
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
        name="Detail"
        component={DeliveryDetailScreen}
        options={{
          title: 'D28292',
          headerTintColor: '#fff',
          fontWeight: 'bold',
          headerBackTitle:null, 
        }}
      />
    </Stack.Navigator>
  );
};

export default DetailDeliveryStack;
