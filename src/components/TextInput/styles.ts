/** @format */

import { getHeight, getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const theme = AppliedTheme();
const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: theme.text.input,
    marginBottom: 5,
    marginLeft: 0,
  },
  textField: {
    borderWidth: 1,
    width: getWidth(80),
    height: getHeight(6),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: theme.border.secondary,
    borderRadius: 8.58,
  },
  inputStyle: {
    fontSize: 14,
    // backgroundColor:'red',
    color: theme.text.input,
  },
  container: {
    // marginVertical:height%
    marginVertical: getHeight(1.5),
  },
  iconStyle: {
    resizeMode: "contain",
    width: getWidth(8),
    // backgroundColor:'red',
    height: getHeight(3),
  },
});
export default styles;
