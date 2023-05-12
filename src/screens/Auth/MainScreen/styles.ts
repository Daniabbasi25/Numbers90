/** @format */

import { StyleSheet } from "react-native";
import { AppliedTheme } from "@constants";

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
    bottom: "18%",
  },
});
export default styles;
