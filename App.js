import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./components/MainMenu";
import ConvertingPage from "./components/ConvertingPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main menu" component={MainPage} />
        <Stack.Screen name="Converter" component={ConvertingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
