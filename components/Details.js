import React from "react";
import { View, Text } from "react-native";

function Details(props) {
  const { dataToDisplay } = props.route.params;

  return (
    <View style={{ padding: 5 }}>
      {dataToDisplay &&
        Object.keys(dataToDisplay).map((item, index) => {
          return (
            <View key={index}>
              <Text>
                {item} : {JSON.stringify(dataToDisplay[item])}
              </Text>
            </View>
          );
        })}
    </View>
  );
}

export default Details;
