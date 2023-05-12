/** @format */

import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const theme = AppliedTheme();
const styles = StyleSheet.create({
  screenContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  HeadingText: {
    color: theme.text.heading,
    fontSize: 25,
    fontWeight: "700",
  },
  textView: {
    alignItems: "flex-start",
    bottom: "3%",
    width: getWidth(90),
  },
  orRegisterwithView: {
    width: getWidth(90),
    height: getHeight(6),
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },

  dividerView: {
    borderStartColor: theme.text.label,
    borderWidth: 0.5,
    width: getWidth(30),
  },
  orRegisterwithText: {
    fontSize: 12,
    fontWeight: "400",
    color: theme.text.label,
  },
  SocialButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: getWidth(90),
  },
  belowTextView: {
    flexDirection: "row",
    top: getHeight(4),
    alignItems: "center",
  },
  loginText: {
    fontSize: 12,
    fontWeight: "600",
    textDecorationLine: "underline",
    marginHorizontal: 2,
  },
});
export default styles;
