/** @format */

import { View, Text, Image, TouchableOpacity } from "react-native";
import { FC, useState } from "react";
import styles from "./styles";
import { images } from "@assets";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
import ToggleSwitch from "toggle-switch-react-native";
interface Props {
  heading: string;
  title: string;
  leftIcon?: any;
  rightButton?: any;
  rightIcon?: any;
  rightOnPress: void;
}
const PreferencesComponent: FC<Props> = (props) => {
  const [isToggleOn, setIsToggleOn] = useState<boolean>(true);

  const handleToggle = (isOn: boolean) => {
    setIsToggleOn(isOn);
  };

  const { heading, title, leftIcon, rightButton, rightIcon, rightOnPress } =
    props;
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <Image source={leftIcon} style={styles.imageStyle} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.boldText}>{heading} </Text>
        <Text style={[styles.boldText, { color: theme.placeHolder.primary }]}>
          {title}
        </Text>
      </View>
      {rightIcon ? (
        <TouchableOpacity
          style={styles.toggleButtonView}
          onPress={rightOnPress}
        >
          <Image source={rightIcon} style={styles.imageStyle} />
        </TouchableOpacity>
      ) : (
        <View style={styles.toggleButtonView}>
          <ToggleSwitch
            isOn={isToggleOn}
            onColor={theme.background.secondary}
            offColor={theme.border.secondary}
            size="medium"
            onToggle={handleToggle}
          />
        </View>
      )}
    </View>
  );
};
export default PreferencesComponent;
