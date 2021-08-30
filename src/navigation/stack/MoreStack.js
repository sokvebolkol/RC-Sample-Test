import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MoreScreen from '../../screens/more/MoreScreen';
import colors from '../../common/colors';

const Stack = createStackNavigator();

const MoreStack = () => {
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
        name="More"
        component={MoreScreen}
        options={{
          title: 'More',
          headerTintColor: '#fff',
          fontWeight: 'bold',
          headerBackTitle:null, 
        }}
      />
    </Stack.Navigator>
  );
};

export default MoreStack;
