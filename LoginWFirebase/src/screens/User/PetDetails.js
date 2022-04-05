import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Button from "../../components/Button";
import TopBar from "../../components/TopBar";
import firebase from "firebase/app";
import "firebase/auth";
import CPetItem from "../../components/CPetItem";
import { Searchbar } from "react-native-paper";
import CPetDetails from "../../components/CPetDetails";

export default function PetDetails({ navigation, route }) {
  const { pet } = route.params;
  return (
    <View style={styles.container}>
      <TopBar title="Pet Details" />
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
      <ScrollView style={{ width: "100%", flex: 1, paddingHorizontal: 15 }}>
        <CPetDetails pet={pet} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    marginVertical: 20,
  },
  petsContainer: {
    width: "100%",
    flex: 1,
  },
});
