import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import CSelect from "../../components/CSelect";

const Filters = ({ data, setFilters, filters, onClearFilter }) => {
  return (
    <ScrollView style={{ width:'100%'}}>
      <View style={styles.centeredView}>
        <Button style={{ alignSelf: "center" }} onPress={onClearFilter}>
          Clear Filters
        </Button>
        <View style={styles.row}>
          <CSelect
            label="Gender"
            value={filters?.gender}
            setValue={(value) =>
              setFilters((prev) => ({ ...prev, gender: value }))
            }
            options={[
              { label: "Select a gender", value: "" },
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
          <CSelect
            label="Age"
            value={filters?.age}
            setValue={(value) =>
              setFilters((prev) => ({ ...prev, age: value }))
            }
            options={[
              { label: "Select a age", value: "" },
              { label: "Less then a week", value: 1 },
              { label: "Less then a month", value: 2 },
              { label: "Less then 3 months", value: 3 },
              { label: "More then 3 months", value: 4 },
            ]}
          />
        </View>
        <CSelect
          label="Breed"
          value={filters?.breed}
          setValue={(value) =>
            setFilters((prev) => ({ ...prev, breed: value }))
          }
          options={[
            { label: "Select a breed", value: "" },
            ...data.map((each) =>
              each.breed
                ? {
                    label: each.breed,
                    value: each.breed,
                  }
                : false
            ),
          ]}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default React.memo(Filters);
