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
    justifyContent: "center",
    backgroundColor: theme.background.primary,
  },

  PasswordChanged: {
    fontSize: 30,
    fontWeight: "700",
    color: theme.buttonText.secondary,
    marginBottom: getHeight(2),
    alignSelf: "center",
  },

  textStyle: {
    fontSize: 14,
    fontWeight: "400",
    color: theme.text.label,
    textAlign: "center",
    width: getWidth(50),
    alignSelf: "center",
  },
  SecondaryButtonView: {
    marginTop: getHeight(5),
  },
});
export default styles;
