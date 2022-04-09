import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Button from "../../components/Button";
import TopBar from "../../components/TopBar";
import firebase from "firebase/app";
import "firebase/auth";
import CPetItem from "../../components/CPetItem";
import { Searchbar } from "react-native-paper";

export default function UserHome({ navigation }) {
  const [pets, setPets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      firebase
        .firestore()
        .collection("pets")
        .get()
        .then((res) => {
          setPets(res.docs.map((e) => e.data()));
        });
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  let filteredItems = [...pets];

  if (searchQuery) {
    filteredItems = filteredItems.filter((eachPet) =>
      eachPet?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    );
  }

  return (
    <View style={styles.container}>
      <TopBar title="Home" />

      <Text style={styles.heading}>Find Your Forever friend</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ marginBottom: 20 }}
      />
      <ScrollView style={{ width: "100%", flex: 1, paddingHorizontal: 15 }}>
        <View style={styles.petsContainer}>
          {filteredItems.map((eachPet) => {
            return (
              <CPetItem
                onClick={() =>
                  navigation.navigate("PetDetails", {
                    pet: eachPet,
                  })
                }
                key={eachPet?.name}
                pet={eachPet}
              />
            );
          })}
        </View>
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
