/** @format */

import { AppliedTheme } from "@constants";
import { getHeight, getWidth } from "@helpers";
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const theme = AppliedTheme();
const styles = StyleSheet.create({
  singleCotaniner: {
    backgroundColor: theme.background.neutral,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: theme.postionBoard.toperBorder,
  },
  userImage: {
    width: Math.min(width, height) * 0.15,
    height: Math.min(width, height) * 0.15,
    borderRadius: 100,
  },
  downGrade: {
    width: getWidth(5),
    height: getHeight(2),
    resizeMode: "center",
    alignSelf: "center",
  },
  textContainer: {
    flex: 1,

    flexDirection: "row",
    marginLeft: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  listContainer: {
    backgroundColor: theme.background.neutral,
    marginVertical: getHeight(2),
    marginHorizontal: 10,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  listItemContainer: {
    backgroundColor: theme.background.neutral,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  itemName: {
    color: theme.text.primaryheading,
    fontSize: 18,
    fontWeight: "600",
  },
  userName: {
    color: theme.text.primaryheading,
    fontSize: 13,
    fontWeight: "300",
  },
  scoreText: {
    color: theme.text.primaryheading,
    fontSize: 18,
    fontWeight: "800",
  },
});
export default styles;
