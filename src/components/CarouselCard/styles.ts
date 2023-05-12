/** @format */

import { StyleSheet } from "react-native";
import { AppliedTheme } from "@constants";
import { getWidth, getHeight } from "@helpers";
const theme = AppliedTheme();
const styles = StyleSheet.create({
  CardView: {
    width: getWidth(70),
    height: getHeight(55),
    borderWidth: 2,
    borderColor: theme.background.secondary,
    borderRadius: 16,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  InactiveSlide: {
    transform: [{ scale: 0.8 }],
    opacity: 0.7,
  },
  CarouselStyle: {
    alignContent: "center",
    alignItems: "center",
    // width: getWidth(150),
  },
  inactiveDotStyle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    backgroundColor: theme.background.secondary,
  },
  imageStyle: {
    resizeMode: "center",
    width: getWidth(70),
    height: getHeight(55),
  },
});

export default styles;
