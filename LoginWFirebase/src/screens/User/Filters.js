import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Button } from "react-native-paper";
import CSelect from "../../components/CSelect";

const Filters = ({ data, setFilters, filters, onClearFilter }) => {
  return (
    <View style={styles.centeredView}>
      <Button onPress={onClearFilter}>
        Clear Filters
      </Button>
      <CSelect
        label="Gender"
        value={filters?.gender}
        setValue={(value) => setFilters((prev) => ({ ...prev, gender: value }))}
        options={[
          {label:'Select a gender',value:''},
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
      />
       <CSelect
        label="Age"
        value={filters?.age}
        setValue={(value) => setFilters((prev) => ({ ...prev, age: value }))}
        options={[
          {label:'Select a age',value:''},
          { label: "Less then a year", value: 1 },
          { label: "Less then 2 years", value: 2 },
          {label: 'more then 2 years', value: 3}
        ]}
      />
      <CSelect
        label="Breed"
        value={filters?.breed}
        setValue={(value) => setFilters((prev) => ({ ...prev, breed: value }))}
        options={[{label:'Select a breed',value:''},...data.map((each) => each.breed ? {
            label: each.breed,
            value: each.breed
        } : false)]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

export default React.memo(Filters);
