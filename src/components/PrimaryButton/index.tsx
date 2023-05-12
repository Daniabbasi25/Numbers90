/** @format */

import { View, Text, TouchableOpacity, Image } from "react-native";
import { FC } from "react";
import styles from "./styles";
import { getWidth } from "@helpers";

interface Props {
  title: string;
  onPress: void;
  image?: any;
  width: any;
}
const PrimaryButton: FC<Props> = (props) => {
  const { title, onPress, image, width } = props;
  return (
    <TouchableOpacity
      style={
        width ? [styles.container, { width: getWidth(26) }] : styles.container
      }
      onPress={() => onPress}
    >
      {image ? (
        <Image source={image} style={styles.imageStyle} />
      ) : (
        <Text style={styles.textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
export default PrimaryButton;
