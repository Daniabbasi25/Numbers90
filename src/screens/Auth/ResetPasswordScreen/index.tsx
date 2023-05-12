/** @format */

import { FC, useState } from "react";
import { Text, View, Pressable, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { AppliedTheme } from "@constants";
import { TextInput, SecondaryButton } from "@components";
import { images } from "@assets";
const theme = AppliedTheme();
const ResetPasswordScreen: FC = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const handleResetPassword = () => {
    navigation.navigate("PasswordChanged");
  };
  return (
    <View style={styles.container}>
      <View style={styles.forgetPasswordMainView}>
        <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
          <Image source={images.backArrow} style={styles.imageStyle} />
        </Pressable>

        <Text style={styles.ForgotPassword}>Reset password</Text>
        <Text style={styles.textStyle}>
          Please type something you’ll remember
        </Text>
      </View>
      <View style={styles.textInputView}>
        <TextInput
          label="New password"
          placeholder="must be 8 characters"
          placeholderTextColor={theme.text.label}
          secureTextEntry={showPassword}
          rightIcon={true}
          onPress={() => setShowPassword(!showPassword)}
          icon={showPassword ? images.closeEye : images.openEye}
        />
        <TextInput
          label="Confirm new password"
          placeholder="repeat password"
          placeholderTextColor={theme.text.label}
          secureTextEntry={showPassword}
          rightIcon={true}
          onPress={() => setShowPassword(!showPassword)}
          icon={showPassword ? images.closeEye : images.openEye}
        />
        <SecondaryButton title="Reset password" onPress={handleResetPassword} />
      </View>
    </View>
  );
};

export default ResetPasswordScreen;
