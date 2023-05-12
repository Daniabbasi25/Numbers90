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
    alignItems: "center",
  },
  Heading: {
    color: theme.text.heading,
    fontSize: 28,
  },
});
export default styles;
