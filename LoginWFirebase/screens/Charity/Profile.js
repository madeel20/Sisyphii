import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import TopBar from "../../components/TopBar";
import firebase from "firebase/app";
import "firebase/auth";

export default function CharityProfile({ navigation }) {
  return (
    <>
      <TopBar title="Profile" />
      <View style={styles.container}>
        <Button
          mode="contained"
          onPress={() => firebase.auth().signOut()}
          style={{ width: 300 }}
        >
          Log Out
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
