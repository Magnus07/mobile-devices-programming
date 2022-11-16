import { Button } from "react-native";
import { convertOptions, rates } from "../convertingDB";
import React from "react";

export default function MainMenuButton({ navigateMenu, whatFor, index }) {
  return (
    <Button
      onPress={() => {
        navigateMenu(convertOptions[index], rates[index]);
      }}
      title={whatFor}
      accessibilityLabel={whatFor}
    />
  );
}
