/** @format */

import { StyleSheet } from "react-native";

import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {
    width: getWidth(60),
    height: getHeight(7),
    backgroundColor: theme.background.neutral,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.border.secondary,
    justifyContent: "center",
  },
  textStyle: {
    alignSelf: "center",
    color: theme.text.label,
    fontWeight: "500",
    fontSize: 20,
  },
  imageStyle: {
    resizeMode: "contain",
    width: getWidth(6),
    height: getHeight(3),
    alignSelf: "center",
  },
});
export default styles;
