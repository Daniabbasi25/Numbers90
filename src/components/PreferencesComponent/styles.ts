/** @format */

import { StyleSheet } from "react-native";
import { AppliedTheme } from "@constants";
import { getHeight, getWidth } from "@helpers";
const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {
    width: getWidth(80),
    height: getHeight(9),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconView: {
    width: getWidth(10),
    height: getHeight(5),
    backgroundColor: theme.border.secondary,
    borderRadius: 100,
    justifyContent: "center",
    alignSelf: "center",
  },
  imageStyle: {
    resizeMode: "contain",
    width: getWidth(4),
    height: getHeight(2),
    alignSelf: "center",
  },
  textView: {
    flexDirection: "column",
    alignSelf: "center",
    width: getWidth(50),
  },
  boldText: {
    fontSize: 14,
    fontWeight: "400",
    color: theme.text.heading,
  },
  toggleButtonView: {
    alignSelf: "center",
    width: getWidth(10),
  },
});
export default styles;
