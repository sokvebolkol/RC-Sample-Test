import React, { useContext, useState } from "react";
import {StyleSheet, View, TouchableOpacity, Text, Image,} from 'react-native';
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
    });
    login(foundUser);
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imgLogo} source={{uri:'https://www.logofootball.net/wp-content/uploads/Real-Madrid-CF-Logo.png'}} width={100} height={100} resizeMode='contain'/>
      </View>
      <View style={styles.body}>
        <TelInput />
        <View style={styles.button}>
          <TouchableOpacity onPress={_handleLogin}>
            <LinearGradient
              colors={[colors.primary,colors.primary]}
              style={styles.login}>
              <Text style={styles.textSign}>NEXT</Text>
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
    backgroundColor: colors.primary,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imgLogo: {
    width:200,
    height:200,
  },
  body: {
    flex: 1.5,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 50, 
  },
  textSign:{
    color:'#fff',
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
