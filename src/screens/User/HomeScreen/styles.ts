/** @format */

import { AppliedTheme } from "@constants";
import { getHeight, getWidth } from "@helpers";
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const theme = AppliedTheme();
const styles = StyleSheet.create({
  container: {
    width: getWidth(100),
    height: getHeight(100),
  },
  subView: {
    marginTop: getHeight(5),
  },
});
export default styles;
