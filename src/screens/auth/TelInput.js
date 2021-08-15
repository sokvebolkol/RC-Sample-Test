import React, { useState, useRef  } from "react";
import {
  StatusBar,
  View,
  KeyboardAvoidingView,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const TelInput: React.FC = () => {

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView>
          <View style={{ alignItems:'center'}}>
          <PhoneInput
            // ref={phoneInput}
            defaultValue={value}
            defaultCode="KH"
            layout="first"
            withShadow={false}
            keyboardType="text"
            autoFocus={true}
            onChangeText={(text) => {
              setValue(text);
            }}
            // onChangeFormattedText={(text) => {
            //   setFormattedValue(text);
            // }}
            // withDarkTheme
          />
          </View>
          </KeyboardAvoidingView>

    </>
  );
};

export default TelInput;
