import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationScreen from '../../screens/notification/NotificationScreen';
import colors from '../../common/colors';

const Stack = createStackNavigator();

const NotificationStack = () => {
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
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Notification',
          headerTintColor: '#fff',
          fontWeight: 'bold',
          headerBackTitle:null, 
        }}
      />
    </Stack.Navigator>
  );
};

export default NotificationStack;
