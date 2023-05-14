/** @format */

import { View, Text } from "react-native";
import React, { FC } from "react";
import styles from "./styles";
import { BackgroundComponent, SavedNumber, PrimaryHeading } from "@components";
const HomeScreen: FC = () => {
  return (
    <BackgroundComponent style={styles.container}>
      <View style={styles.subView}>
        <PrimaryHeading title="Saved Numbers" />
      </View>
      <SavedNumber />
    </BackgroundComponent>
  );
};

export default HomeScreen;
