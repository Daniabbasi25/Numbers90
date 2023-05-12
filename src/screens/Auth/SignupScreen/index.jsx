/** @format */

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
const SignupScreen: FC = ({ navigation }) => {
  // const [username, setUserName] = useState<string | undefined>();
  // const [email, setEmail] = useState<string | undefined>();
  // const [password, setPassword] = useState<string | undefined>();

  // const [showUserName, setShowUserName] = useState < boolean > true;
  // const [showPassword, setShowPassword] = useState < boolean > true;
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <FullScreenPrimary style={styles.screenContainer}>
      <View style={styles.textView}>
        <Text style={styles.HeadingText}>Sign up</Text>
      </View>
      <TextInput
        // value={username}
        // onChangeText={(value) => setUserName(value)}
        label="Username"
        name="username"
        placeholder="Enter username"
        rightIcon={true}
        // icon={showUserName ? images.closeEye : images.openEye}
        // onPress={() => setShowUserName(!showUserName)}
        // secureTextEntry={showUserName}
      />
      <TextInput
        label="Email"
        name="email"
        placeholder="example@gmail.com"
        // value={email}
        // onChangeText={(value) => {
        //   setEmail(value);
        // }}
        keyboardType="email-address"
      />
      <TextInput
        label="Create a password"
        name="Password"
        placeholder="must be 8 characters"
        // value={password}
        // onChangeText={(value) => {
        //   setPassword(value);
        // }}
        rightIcon={true}
        // icon={showPassword ? images.closeEye : images.openEye}
        // onPress={() => setShowPassword(!showPassword)}
        // secureTextEntry={showPassword}
      />
      <SecondaryButton title="Sign up" />
      <View style={styles.orRegisterwithView}>
        <View style={styles.dividerView} />
        <Text style={styles.orRegisterwithText}>Or Register with</Text>
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
        <Text style={styles.orRegisterwithText}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </FullScreenPrimary>
  );
};

export default SignupScreen;
