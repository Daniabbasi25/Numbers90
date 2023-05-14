/** @format */

import { Text, View, TouchableOpacity } from "react-native";
import { FC } from "react";
import styles from "./styles";

interface Props {
  title: string;
  width?: any;
  height?: any;
  onPress: () => void;
}

const SecondaryButton: FC<Props> = (props) => {
  const { onPress, title, width, height } = props;
  return (
    <TouchableOpacity
      style={
        width
          ? [styles.container, { width: width, height: height }]
          : styles.container
      }
      onPress={onPress}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
export default SecondaryButton;
