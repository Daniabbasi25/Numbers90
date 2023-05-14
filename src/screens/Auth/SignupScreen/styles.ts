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
    bottom: getHeight(2),
  },
  textView: {
    alignItems: "flex-start",
    // bottom: "3%",
    width: getWidth(80),
    marginTop: getHeight(3),
  },
  orRegisterwithView: {
    width: getWidth(80),
    height: getHeight(6),
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },

  dividerView: {
    borderStartColor: theme.text.label,
    borderWidth: 0.5,
    width: getWidth(25),
  },
  orRegisterwithText: {
    fontSize: 12,
    fontWeight: "400",
    color: theme.text.label,
  },
  SocialButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: getWidth(80),
  },
  belowTextView: {
    flexDirection: "row",
    top: getHeight(4),
    alignItems: "center",
    alignSelf: "center",
  },
  loginText: {
    fontSize: 12,
    fontWeight: "600",
    textDecorationLine: "underline",
    marginHorizontal: 2,
  },
  SecondaryButtonView: {
    marginVertical: getHeight(2),
  },
});
export default styles;
