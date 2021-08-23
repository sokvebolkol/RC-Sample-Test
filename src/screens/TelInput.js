import React, { useState, useRef  } from "react";
import {
  StatusBar,
  View,
  KeyboardAvoidingView,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import colors from "../../common/colors";

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
            containerStyle={{ borderRadius:10, borderWidth:1, borderColor:'#646d7e4d', backgroundColor:'#fff', width:'100%'}}
            textContainerStyle={{ borderTopRightRadius:10, borderBottomRightRadius:10, borderColor:colors.secondary, backgroundColor:'#fff'}}
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
          />
          </View>
          </KeyboardAvoidingView>

    </>
  );
};

export default TelInput;
