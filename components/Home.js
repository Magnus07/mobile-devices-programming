import React from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getData, setData as spSetData } from "./StorageProvider";

function Home({ navigation }) {
  const DATA_URL =
    "https://api.worldbank.org/v2/country?format=json&region=CLA&page=";
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);

  async function updateData(json) {
    if (JSON.stringify(await getData("page" + page)) != JSON.stringify(json))
      await spSetData("page" + page, json);
    else console.log("already saved");

    setData(json);
  }

  React.useEffect(() => {
    fetch(DATA_URL + page)
      .then((response) => response.json())
      .then((json) => updateData(json))
      .catch(async (error) => {
        setData(await getData("page" + page));
        console.error(error);
      });
  }, [page]);

  function handeNav(pg) {
    if (pg > 0 && pg <= data[0].pages) setPage(pg);
  }

  return (
    <SafeAreaView>
      <View style={{ height: "98%" }}>
        <ScrollView>
          {data[1] &&
            data[1].map((item, index) => {
              return (
                <View key={index} style={{ padding: 5 }}>
                  <Button
                    onPress={() =>
                      navigation.navigate("Details", { dataToDisplay: item })
                    }
                    title={JSON.stringify(item.name)}
                    color="#841584"
                    accessibilityLabel="Details about {item.name}"
                  />
                </View>
              );
            })}
        </ScrollView>
      </View>
      {data[0].pages > 1 && (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handeNav(page - 1)}
          >
            <Text>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handeNav(page + 1)}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    height: 35,
    flex: 1,
  },
});

export default Home;
