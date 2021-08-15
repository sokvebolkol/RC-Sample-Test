import React, { useContext, useState } from "react";
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../common/colors';
import LinearGradient from 'react-native-linear-gradient';
import TelInput from './TelInput';
import Users from "../../model/users";
import { AuthContext } from "../../components/context";


const LoginScreen = () => {
  const { login } = useContext(AuthContext);

  const [data, setData] = useState({
      username: "",
      password: "",
      isValidUser: true,
      isValidPassword: true,
      check_textInputChange: false,
      secureTextEntry: true,
  });
  const navigation = useNavigation();


  const _handleLogin = () => {
    
    const foundUser = Users.filter((item) => {
        return true;
        // return userName == item.username && password == item.password;
        // return phoneNumber = item.phoneNumber;
    });

    // if (data.username.length == 0 || data.password == 0) {
    //     Alert.alert(
    //         "Wrong Input!",
    //         "Username or Password field cannot be empty!!",
    //         [{ text: "Okay" }]
    //     );
    //     return;
    // }

    // if (foundUser == 0) {
    //     Alert.alert("Invalid User!", "Username or Password is incorrect!", [
    //         { text: "Okay" },
    //     ]);
    //     return;
    // }
    login(foundUser);
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <TelInput />
        <View style={styles.button}>
          <TouchableOpacity onPress={_handleLogin}>
            <LinearGradient
              colors={['#fff','#fff']}
              style={styles.login}>
              <Text style={styles.textSign}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 1.5,
    backgroundColor: colors.primary,
    borderRadius: 30,
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 50, 
  },
  textSign:{
    fontWeight: 'bold',
  },
  login: {
    width: '100%',
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    flexDirection: "row",

  },
});
