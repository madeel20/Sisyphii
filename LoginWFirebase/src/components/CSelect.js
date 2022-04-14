import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";

const CSelect = ({ label, value, setValue, options = [] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        selectedValue={value}
        style={{ height: 30, width: 150, }}
        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
      >
        {options.map((eachOption) => {
          return (
            <Picker.Item key={eachOption.label} label={eachOption.label} value={eachOption.value} />
          );
        })}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    alignItems: "center",
  },
  label: {
      fontSize:14,
      marginBottom:5
  }
});

export default CSelect;
