/** @format */

import { StyleSheet } from "react-native";
import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";

const theme = AppliedTheme();

const styles = StyleSheet.create({
  container: {
    height: getHeight(100),
    width: getWidth(100),
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.background.primary,

    // marginTop: getHeight(8),
    // justifyContent: "center",
  },
  backArrow: {
    width: getWidth(12),
    height: getHeight(6),
    borderWidth: 1,
    borderColor: theme.border.secondary,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: getHeight(8),
    marginTop: getHeight(8),
    // zIndex: 999,
  },
  imageStyle: {
    resizeMode: "contain",
    alignSelf: "center",
    width: getWidth(6),
    height: getHeight(3),
  },
  backArrowMainView: {
    width: getWidth(100),
    alignSelf: "flex-start",
  },
  backArrowMainView: {
    width: getWidth(100),
    alignSelf: "flex-start",
  },
  ForgotPassword: {
    fontSize: 30,
    fontWeight: "700",
    color: theme.buttonText.secondary,
    marginBottom: getHeight(2),
  },
  forgetPasswordMainView: {
    width: getWidth(90),

    // marginTop: getHeight(10),
  },

  textStyle: {
    fontSize: 14,
    fontWeight: "400",
    color: theme.text.label,
    textAlign: "justify",
  },
  textInputView: {
    marginTop: getHeight(2),
  },
  secondaryButtonView: {
    margin: getHeight(3),
  },
});
export default styles;
