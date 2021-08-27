import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/auth/SplashScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import OTPScreen from "../screens/phoneAuth/OTPScreen";
import SuccessScreen from "../screens/phoneAuth/SuccessScreen";
import MainTabScreen from "./MainTabScreen";
import MainStackScreen from "./MainStackScreen";
import MoreScreen from "../screens/more/MoreScreen";
import NotificationScreen from "../screens/notification/NotificationScreen";
import NotificationDetailScreen from "../screens/notification/NotificationDetailScreen";

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      {/* <RootStack.Screen name="SplashScreen" component={SplashScreen} /> */}
      {/* <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      <RootStack.Screen name="OTPScreen" component={OTPScreen} />
      <RootStack.Screen name="SuccessScreen" component={SuccessScreen} /> */}
      <RootStack.Screen name="MainTabScreen" component={MainTabScreen}/>
      <RootStack.Screen name="MainStack" component={MainStackScreen}/>
      <RootStack.Screen name="More" component={MoreScreen}/>
      <RootStack.Screen name="Notification" component={NotificationScreen}/>
      <RootStack.Screen name="NotificationDetail" component={NotificationDetailScreen}/>

    </RootStack.Navigator>
  );
};

export default RootStackScreen;
