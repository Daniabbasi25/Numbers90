/** @format */

import { FC } from "react";
import { Text, View } from "react-native";
import { PrimaryButton, MathlyBackgroundComponent } from "@components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const MainScreen: FC = () => {
  const navigation = useNavigation();
  return (
    <MathlyBackgroundComponent style={styles.screenContainer}>
      <View style={styles.textView}>
        <Text style={styles.HeadingText}>Mathly</Text>
      </View>
      <View style={styles.ButtonMainView}>
        <View style={styles.buttonView}>
          <PrimaryButton
            title="Play"
            onPress={() => navigation.navigate("GameStack")}
          />
        </View>
        <View style={styles.buttonView}>
          <PrimaryButton
            title="How to Play"
            onPress={() => navigation.navigate("BottomTab")}
          />
        </View>
        <View style={styles.buttonView}>
          <PrimaryButton title="Preferences" />
        </View>
        <View style={styles.buttonView}>
          <PrimaryButton title="Upgrade" />
        </View>
      </View>
    </MathlyBackgroundComponent>
  );
};
export default MainScreen;
