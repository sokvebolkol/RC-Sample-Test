import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/auth/SplashScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import OTPScreen from "../screens/phoneAuth/OTPScreen";
import SuccessScreen from "../screens/phoneAuth/SuccessScreen";
import MainTabScreen from "./MainTabScreen";
import RequestBookingStack from "./stack/RequestBookingStack";
import MoreStack from "./stack/MoreStack";
import colors from "../utils/Colors";
import NotificationDetailScreen from "../screens/notification/NotificationDetailScreen";
import NotificationStack from "./stack/NotificationStack";
import Ok from "../screens/Ok";

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      {/* <RootStack.Screen name="SplashScreen" component={SplashScreen} /> */}
      {/* <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      <RootStack.Screen name="OTPScreen" component={OTPScreen} />
      <RootStack.Screen name="SuccessScreen" component={SuccessScreen} /> */}
      <RootStack.Screen name="MainTabScreen" component={MainTabScreen}/>
      <RootStack.Screen name="Request" component={RequestBookingStack}/>
      <RootStack.Screen name="More" component={MoreStack}/>
      <RootStack.Screen name="Notification" component={NotificationStack}/>
      <RootStack.Screen name="NotificationDetail" component={NotificationDetailScreen}/>
      <RootStack.Screen name="ok" component={Ok}/>
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
