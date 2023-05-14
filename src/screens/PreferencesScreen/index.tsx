/** @format */

import { View, Text } from "react-native";
import { FC } from "react";
import styles from "./styles";
import {
  BackgroundComponent,
  PreferencesComponent,
  PrimaryHeading,
} from "@components";
import { images } from "@assets";
const PreferencesScreen: FC = () => {
  return (
    <BackgroundComponent style={styles.container}>
      <View style={styles.subView}>
        <PrimaryHeading title="Preferences" />
        <PreferencesComponent
          heading="Account"
          title="Make changes to your account"
          leftIcon={images.user}
          rightIcon={images.rightArrow}
          rightOnPress={() => alert("pressed")}
        />
        <PreferencesComponent
          heading="Music"
          title="Turn  Music On / Off"
          leftIcon={images.music}
        />
        <PreferencesComponent
          heading="Sounds"
          title="Turn  Sound On / Off"
          leftIcon={images.volume}
        />
        <PreferencesComponent
          heading="Vibration"
          title="Turn  Vibration On / Off"
          leftIcon={images.vibration}
        />
        <PreferencesComponent
          heading="Notification"
          title="Turn  Notification On / Off"
          leftIcon={images.notification}
        />
        <PreferencesComponent
          heading="Daily Challenge"
          title="Some Details"
          // leftIcon={images.user}
        />
        <PreferencesComponent
          heading="Number References"
          title="Some Details"
        />
        <PreferencesComponent
          heading="Log out"
          title="Log out your account"
          rightIcon={images.rightArrow}
          rightOnPress={() => alert("pressed")}
        />
      </View>
    </BackgroundComponent>
  );
};
export default PreferencesScreen;
