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
    // marginTop: getHeight(8),
    backgroundColor: theme.background.primary,
    // justifyContent: "center",
  },
  backArrow: {
    width: getWidth(14),
    height: getHeight(7),
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
    width: getWidth(8),
    height: getHeight(4),
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
  belowTextView: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
  rememberText: {
    fontSize: 12,
    fontWeight: "400",
    color: theme.text.label,
  },
  loginText: {
    fontSize: 12,
    fontWeight: "600",
    marginHorizontal: 2,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "400",
    color: theme.text.label,
    textAlign: "justify",
  },
  textInputView: {
    marginTop: getHeight(4),
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: getHeight(5),
  },
  input: {
    borderWidth: 1,
    borderColor: theme.border.secondary,
    width: getWidth(20),
    height: getHeight(10),
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
  },
});
export default styles;
