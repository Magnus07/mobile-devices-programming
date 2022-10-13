import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainMenuButton from "./MainMenuButton";

function MainPage({ navigation }) {
  function navigateMenu(options, rates) {
    navigation.navigate("Converter", {
      convertOptions: options,
      rates: rates,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text>What would you like to start with?</Text>
      </View>
      <View style={styles.buttonsView}>
        {["Length", "Weight", "Temperature"].map((item, index) => {
          return (
            <MainMenuButton
              navigateMenu={navigateMenu}
              whatFor={item}
              index={index}
              key={index}
            />
          );
        })}
      </View>
      <View>
        <Text>Created by Stanislav Pinchuk in October, 2022</Text>
      </View>
    </View>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textView: { flex: 1, justifyContent: "flex-end" },
  buttonsView: {
    flex: 3,
    justifyContent: "space-around",
    marginBottom: "15%",
  },
});
