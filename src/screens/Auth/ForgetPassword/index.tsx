/** @format */

import { FC } from "react";
import { Text, View, Pressable, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { AppliedTheme } from "@constants";
import { TextInput, SecondaryButton } from "@components";
import { images } from "@assets";
const theme = AppliedTheme();
const ForgetPassword: FC = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleOtpScreen = () => {
    navigation.navigate("OtpScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.forgetPasswordMainView}>
        <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
          <Image source={images.backArrow} style={styles.imageStyle} />
        </Pressable>

        <Text style={styles.ForgotPassword}>Forgot password?</Text>
        <Text style={styles.textStyle}>
          Don’t worry! It happens. Please enter the email associated with your
          account.
        </Text>
      </View>
      <View style={styles.textInputView}>
        <TextInput
          label="Email address"
          placeholder="Enter your email address"
          placeholderTextColor={theme.text.label}
        />
        <SecondaryButton title="Send code" onPress={handleOtpScreen} />
      </View>
      <View style={styles.belowTextView}>
        <Text style={styles.rememberText}>Remember password?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;
