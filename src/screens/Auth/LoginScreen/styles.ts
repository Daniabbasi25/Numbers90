/** @format */

import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const theme = AppliedTheme();
const styles = StyleSheet.create({
  screenContainer: {
    alignItems: "center",
    // justifyContent: "center",
    flex: 1,
  },
  HeadingText: {
    color: theme.text.heading,
    fontSize: 25,
    fontWeight: "700",
  },
  textView: {
    alignItems: "flex-start",
    marginTop: "20%",
    width: getWidth(80),
  },
  forgetPasswordView: {
    width: getWidth(80),
    height: getHeight(6),
  },
  forgetPasswordText: {
    alignSelf: "flex-end",
    fontSize: 12,
    fontWeight: "400",
    color: theme.text.label,
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
  textInputView: {
    marginVertical: getHeight(3),
    alignItems: "center",
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
    top: getHeight(8),
    alignItems: "center",
  },
  loginText: {
    fontSize: 12,
    fontWeight: "600",
    textDecorationLine: "underline",
    marginHorizontal: 2,
  },

  TopPlayButtonView: {
    width: getWidth(100),
    height: getHeight(8),
    backgroundColor: theme.background.neutral,
    // bottom: getHeight(13),
    justifyContent: "center",
    overflow: "hidden",
    zIndex: 999,
  },
  TopPlayButtonSubView: {
    flexDirection: "row",
    width: getWidth(80),
    justifyContent: "space-between",
    alignSelf: "center",
  },
  playButtonText: {
    fontSize: 12,
    fontWeight: "500",
    color: theme.background.neutral,
  },
  playButton: {
    width: getWidth(20),
    height: getHeight(6),
    backgroundColor: theme.button.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  topTextStyle: {
    color: theme.text.primary,
    borderRadius: 8,
    alignSelf: "center",
  },
  textStyle: {},
});
export default styles;
