/** @format */

import { FC, useState } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./styles";
import { AppliedTheme } from "@constants";
import { SecondaryButton } from "@components";
import { images } from "@assets";
const theme = AppliedTheme();

interface State {
  num1: number | null;
  num2: number | null;
  num3: number | null;
  num4: number | null;
}
const OtpScreen: FC = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const [state, setState] = useState<State>({
    num1: null,
    num2: null,
    num3: null,
    num4: null,
  });
  const handleInputChange = (text: string, inputName: keyof State) => {
    const num = parseInt(text);
    if (!isNaN(num)) {
      setState({ ...state, [inputName]: num });
    }
  };
  const handleVerify = () => {
    navigation.navigate("ResetPasswordScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.forgetPasswordMainView}>
        <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
          <Image source={images.backArrow} style={styles.imageStyle} />
        </Pressable>

        <Text style={styles.ForgotPassword}>Please check your email</Text>
        <Text style={styles.textStyle}>
          We’ve sent a code to{" "}
          <Text style={[styles.loginText, { fontSize: 14 }]}>
            helloworld@gmail.com
          </Text>
        </Text>
      </View>
      <View style={styles.textInputView}>
        <View style={styles.otpContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleInputChange(text, "num1")}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleInputChange(text, "num2")}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleInputChange(text, "num3")}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleInputChange(text, "num4")}
          />
        </View>
        <SecondaryButton title="Verify" onPress={handleVerify} />
      </View>
      <View style={styles.belowTextView}>
        <Text style={styles.rememberText}>Send code again</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginText}>00:20</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpScreen;
