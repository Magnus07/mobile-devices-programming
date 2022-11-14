/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as Location from "expo-location";
import { TOKEN } from "./env.js";

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      await setLocation(location);

      await getForecast(location);
    })();
  }, []);

  async function getForecast(location) {
    var URL =
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      location.coords.latitude +
      "&lon=" +
      location.coords.longitude +
      "&appid=" +
      TOKEN;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => setForecast(data));
  }

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  function txtBeautifier(what) {
    return JSON.stringify(what).replace(/['"]+/g, "");
  }

  return (
    <View style={styles.container}>
      {forecast && (
        <View style={styles.container}>
          <Text>
            Country:
            {txtBeautifier(forecast.city.country)}
          </Text>
          <Text>City: {txtBeautifier(forecast.city.name)}</Text>
          <Text>Population: {txtBeautifier(forecast.city.population)}</Text>
          <Text>As for {txtBeautifier(forecast.list[0].dt_txt)}:</Text>
          <Text>
            Temperature: {(forecast.list[0].main.temp - 273.15).toFixed(1)}
          </Text>
          <Text>
            Feels like: {(forecast.list[0].main.feels_like - 273.15).toFixed(1)}
          </Text>
          <Text>Pressure: {forecast.list[0].main.pressure}</Text>
          <Text>Humidity: {forecast.list[0].main.humidity}%</Text>
          <Text>{forecast.list[0].weather[0].description}</Text>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                "https://openweathermap.org/img/wn/" +
                forecast.list[0].weather[0].icon +
                ".png",
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 75,
    height: 75,
  },
});
export default App;
