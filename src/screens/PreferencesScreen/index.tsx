/** @format */

import { View, Text } from "react-native";
import { FC } from "react";
import styles from "./styles";
import { BackgroundComponent, PreferencesComponent } from "@components";
import { images } from "@assets";
const PreferencesScreen: FC = () => {
  return (
    <BackgroundComponent style={styles.container}>
      <Text style={styles.Heading}>Preferences</Text>

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
      <PreferencesComponent heading="Number References" title="Some Details" />
      <PreferencesComponent
        heading="Log out"
        title="Log out your account"
        rightIcon={images.rightArrow}
        rightOnPress={() => alert("pressed")}
      />
    </BackgroundComponent>
  );
};
export default PreferencesScreen;
