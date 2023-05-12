/** @format */

import { FC } from "react";
import { Text, View, Pressable, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { AppliedTheme } from "@constants";
import { TextInput, SecondaryButton } from "@components";
import { images } from "@assets";
const theme = AppliedTheme();
const PasswordChanged: FC = ({ navigation }) => {
  const handleBackTologin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.forgetPasswordMainView}>
        <Text style={styles.PasswordChanged}>Password changed</Text>
        <Text style={styles.textStyle}>
          Your password has been changed succesfully
        </Text>
      </View>
      <View style={styles.SecondaryButtonView}>
        <SecondaryButton title="Back to login" onPress={handleBackTologin} />
      </View>
    </View>
  );
};

export default PasswordChanged;
