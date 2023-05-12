/** @format */

import { StyleSheet } from "react-native";
import { AppliedTheme } from "@constants";
import { getWidth, getHeight } from "@helpers";
const theme = AppliedTheme();

const styles = StyleSheet.create({
  container: {
    width: getWidth(100),
    height: getHeight(100),
    justifyContent: "center",
    alignSelf: "center",
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "400",
    color: theme.placeHolder.primary,
  },
  Heading: {
    fontSize: 22,
    fontWeight: "700",
    color: theme.text.heading,
  },
  textView: {
    width: getWidth(70),
    height: getHeight(10),
    alignSelf: "center",
    marginTop: getHeight(8),
  },
});
export default styles;
