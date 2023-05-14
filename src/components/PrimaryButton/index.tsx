/** @format */

import { View, Text, TouchableOpacity, Image } from "react-native";
import { FC } from "react";
import styles from "./styles";
import { getHeight, getWidth } from "@helpers";

interface Props {
  title: string;
  onPress?: () => void;
  image?: any;
  width?: any;
  height?: any;
}
const PrimaryButton: FC<Props> = (props) => {
  const { title, onPress, image, width, height } = props;
  return (
    <TouchableOpacity
      style={
        width || height
          ? [styles.container, { width: getWidth(22), height: getHeight(6) }]
          : styles.container
      }
      onPress={onPress}
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
