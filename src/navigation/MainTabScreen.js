import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import Delivery from 'react-native-vector-icons/MaterialCommunityIcons';
import User from 'react-native-vector-icons/Feather';
import History from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import HistoryScreen from '../screens/HistoryScreen';
import AccountScreen from '../screens/AccountScreen';
import PaymentListScreen from '../screens/PaymentList/PaymentListScreen';

import colors from '../common/colors';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabScreen = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={colors.primary}
        inactiveColor={colors.placeholder}>
        {/* Home tab  */}
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: colors.placeholderBackground,
            tabBarIcon: ({color}) => (
              <Icon name="home-outline" color={color} size={26} />
            ),
          }}
        />
        {/* Notification Tab  */}
        <Tab.Screen
          name="Delivery"
          component={DeliveryStackScreen}
          options={{
            tabBarLabel: 'Delivery',
            tabBarColor: colors.placeholderBackground,
            tabBarIcon: ({color}) => (
              <Delivery name="truck-delivery-outline" color={color} size={26} />
            ),
          }}
        />
        {/* History Tab  */}
        <Tab.Screen
          name="History"
          component={HistoryStackScreen}
          options={{
            tabBarLabel: 'History',
            tabBarColor: colors.placeholderBackground,
            tabBarIcon: ({color}) => (
              <History name="history-edu" color={color} size={26} />
            ),
          }}
        />
        {/* Account Tab  */}
        <Tab.Screen
          name="Account"
          component={AccountStackScreen}
          options={{
            tabBarColor: colors.placeholderBackground,
            tabBarLabel: 'Account',
            tabBarIcon: ({color}) => (
              <User name="user" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* Payment screen  */}
      <Stack.Screen
        name="PaymentList"
        component={PaymentListScreen}
        options={{}}
      />
    </>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.placeholderBackground,
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const DeliveryStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.placeholderBackground,
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

const HistoryStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="History" component={HistoryScreen} options={{
          headerLeft: () => null,
      }} />
    </Stack.Navigator>
  );
};

const AccountStackScreen = ({navigation}) => {
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
      <Stack.Screen name="Account" component={AccountScreen} options={{
          headerLeft: () => null,
      }} />
    </Stack.Navigator>
  );
};
