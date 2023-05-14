/** @format */

import { StyleSheet } from "react-native";
import { AppliedTheme } from "@constants";
import { getHeight } from "@helpers";

const theme = AppliedTheme();
const styles = StyleSheet.create({
  screenContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    padding: 10,
  },
  HeadingText: {
    color: theme.text.heading,
    fontSize: 36,
    fontWeight: "600",
  },
  textView: {
    alignItems: "center",
    bottom: "15%",
  },
  ButtonMainView: {
    top: getHeight(5),
  },
});
export default styles;
