import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import ConvertingPicker from "./ConvertingPicker";

function ConvertingPage(props) {
  const { convertOptions, rates } = props.route.params;
  const [convertFrom, setconvertFrom] = React.useState(0);
  const [convertTo, setconvertTo] = React.useState(0);
  const [convertFromVal, setConvertFromVal] = React.useState(0);
  const [convertToVal, setConvertToVal] = React.useState(0);

  React.useEffect(() => {
    // if we convert temperatures
    if (convertOptions[0] == "celsius") {
      var celsius = convertFromVal;
      if (convertFrom != 0) {
        // convert to celsius
        if (convertFrom == 1) {
          celsius = rates.KtoCelsium(convertFromVal);
        } else if (convertFrom == 2) {
          celsius = rates.FtoCelsium(convertFromVal);
        }
      }
      setConvertToVal(rates[convertOptions[convertTo]](celsius));
    } else {
      var valueInCentimeters1 =
        convertFromVal * rates[convertOptions[convertFrom]];
      setConvertToVal(
        parseFloat(
          valueInCentimeters1 / rates[convertOptions[convertTo]]
        ).toFixed(2)
      );
    }
  }, [convertFromVal, convertToVal, convertFrom, convertTo]);

  return (
    <View>
      <ConvertingPicker
        convertTo={convertFrom}
        setconvertTo={setconvertFrom}
        convertOptions={convertOptions}
      />
      <View style={styles.paddingHorizontal}>
        <TextInput
          onChangeText={setConvertFromVal}
          value={convertFromVal}
          placeholder="Enter your value here"
          keyboardType="numeric"
          maxLength={8}
        />
      </View>
      <ConvertingPicker
        convertTo={convertTo}
        setconvertTo={setconvertTo}
        convertOptions={convertOptions}
      />
      <View style={styles.paddingHorizontal}>
        <Text>{parseFloat(convertToVal).toFixed(2)}</Text>
      </View>
    </View>
  );
}

export default ConvertingPage;

const styles = StyleSheet.create({
  paddingHorizontal: { paddingHorizontal: 8 },
});
