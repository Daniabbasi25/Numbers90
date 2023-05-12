/** @format */


import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Pressable,
} from "react-native";
import React, { FC, useState } from "react";
import { AppliedTheme } from "@constants";
import { images } from "@assets";
import {
  TextInput,
  FullScreenPrimary,
  SecondaryButton,
  PrimaryButton,
} from "@components";
import styles from "./styles";
import { getWidth } from "@helpers";
const theme = AppliedTheme();
const LoginScreen: FC = ({ navigation }) => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const [showUserName, setShowUserName] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const handleSignup = () => {
    navigation.navigate("Singup");
  };
  const handlePlay = () => {
    navigation.navigate("MainScreen");
  };
  const ForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  return (
    <FullScreenPrimary style={styles.screenContainer}>
      <View style={styles.TopPlayButtonView}>
        <View style={styles.TopPlayButtonSubView}>
          <Text style={styles.topTextStyle}>Play without an Account</Text>
          <TouchableOpacity style={styles.playButton} onPress={handlePlay}>
            <Text style={styles.playButtonText}>Play</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.textView}>
        <Text style={styles.HeadingText}>Log in</Text>
      </View>



      <TextInput
        label='Email'
        name='email'
        placeholder='example@gmail.com'
        value={email}
        onChangeText={value => {
          setEmail(value)
        }}
        keyboardType='email-address'
      />
      <TextInput

        label="Password"
        name="Password"
        placeholder="must be 8 characters"

        value={password}
        onChangeText={value => {
          setPassword(value)
        }}
        rightIcon={true}
        icon={showPassword ? images.closeEye : images.openEye}
        onPress={() => setShowPassword(!showPassword)}
        secureTextEntry={showPassword}
      />

      <TouchableOpacity
        style={styles.forgetPasswordView}
        onPress={ForgetPassword}
      >
        <Text style={styles.forgetPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <SecondaryButton title="Login" />
      <View style={styles.orRegisterwithView}>
        <View style={styles.dividerView} />
        <Text style={styles.orRegisterwithText}>Or Login with</Text>
        <View style={styles.dividerView} />
      </View>
      <View style={styles.SocialButton}>
        <PrimaryButton width={20} image={images.faceBook} />
        <PrimaryButton width={20} image={images.google} />
        {Platform.OS === "ios" && (
          <PrimaryButton width={20} image={images.apple} />
        )}
      </View>

      <View style={styles.belowTextView}>
        <Text style={styles.orRegisterwithText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity>
      </View>

    </FullScreenPrimary>
  )
}

export default LoginScreen
