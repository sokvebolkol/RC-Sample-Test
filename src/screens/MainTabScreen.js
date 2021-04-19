import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/Ionicons";

import MoreScreen from "./MoreScreen";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationScreen";
import ProfileScreen from "./ProfileScreen";
import color from "../config/color";

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor={color.white}>
      {/* Home tab  */}
      <Tab.Screen
        name="Home"
        component={homeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: color.primary,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      {/* Notification Tab  */}
      <Tab.Screen
        name="Notification"
        component={notificationStackScreen}
        options={{
          tabBarLabel: "Notification",
          tabBarColor: color.primary,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      {/* Profile Tab  */}
      <Tab.Screen
        name="Profile"
        component={profileStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: color.primary,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      {/* Explore Tab  */}
      <Tab.Screen
        name="MoreScreen"
        component={MoreStackScreen}
        options={{
          tabBarLabel: "More",
          tabBarColor: color.primary,
          tabBarIcon: ({ color }) => (
            <Icon name="ellipsis-horizontal-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const homeStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.primary,
        },
        headerTintColor: color.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Overview",
        }}
      />
    </Stack.Navigator>
  );
};
const notificationStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.primary,
        },
        headerTintColor: color.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Notification"
        component={NotificationsScreen}
        options={{
          title: "Notification",
          // headerLeft: () => (
          //   <Icon.Button
          //     name="ios-menu"
          //     size={25}
          //     backgroundColor="#ff1a8c"
          //     onPress={() => navigation.openDrawer()}
          //   ></Icon.Button>
          // ),
        }}
      />
    </Stack.Navigator>
  );
};

const profileStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.primary,
        },
        headerTintColor: color.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

const MoreStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.primary,
        },
        headerTintColor: color.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="More"
        component={MoreScreen}
      />
    </Stack.Navigator>
  );
};
