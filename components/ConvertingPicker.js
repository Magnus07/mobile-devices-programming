import React from "react";
import { Picker } from "@react-native-picker/picker";

export default function ConvertingPicker({
  convertTo,
  setconvertTo,
  convertOptions,
}) {
  return (
    <Picker
      selectedValue={convertTo}
      onValueChange={(itemValue, itemIndex) => setconvertTo(itemIndex)}
    >
      {convertOptions.map((option, index) => (
        <Picker.Item label={option} value={index} key={index} />
      ))}
    </Picker>
  );
}
