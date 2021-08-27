import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import RequestBookingScreen from '../screens/RequestBookingScreen';
import colors from '../common/colors';

const Stack = createStackNavigator();

const  MainStackScreen = () => {

    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
          },
        }}>
        <Stack.Screen
        title="Vebol"
          name="Request"
          component={RequestBookingScreen}
          options={{
            headerLeft: () => null,
          }}
        />
      </Stack.Navigator>
    );
  };

  export default MainStackScreen;