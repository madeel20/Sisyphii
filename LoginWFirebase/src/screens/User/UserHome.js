import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Button from "../../components/Button";
import TopBar from "../../components/TopBar";
import firebase from "firebase/app";
import "firebase/auth";
import CPetItem from "../../components/CPetItem";
import { Searchbar } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import Filters from "./Filters";
import { getAge } from "../../api/utils";

export default function UserHome({ navigation }) {
  const [pets, setPets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(pets);
  const [filters, setFilters] = useState({
    gender: "",
    breed: "",
    age: "",
  });
  const [showFilters, setShowFilters] = useState(false);

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

  useEffect(() => {
    applyFilters();
  }, [pets, filters, searchQuery]);

  const applyFilters = () => {
    let filteredItems = [...pets];

    if (searchQuery) {
      filteredItems = filteredItems.filter((eachPet) =>
        eachPet?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    if (filters.gender) {
      filteredItems = filteredItems.filter(
        (eachPet) =>
          eachPet?.gender?.toLowerCase() === filters.gender?.toLowerCase()
      );
    }
    if (filters.age) {
      switch (parseInt(filters.age)) {
        case 1:
          filteredItems = filteredItems.filter((eachPet) => {
            return (
              getAge(new Date(eachPet?.dateOfBirth?.seconds * 1000), false) <= 7
            );
          });
          break;
        case 2:
          filteredItems = filteredItems.filter(
            (eachPet) =>
              getAge(new Date(eachPet?.dateOfBirth?.seconds * 1000), false) <=
              30
          );
          break;
        case 3:
          filteredItems = filteredItems.filter(
            (eachPet) => {
             return  getAge(new Date(eachPet?.dateOfBirth?.seconds * 1000), false) <= 90
            }
            );
            break;
        case 4:
          filteredItems = filteredItems.filter(
            (eachPet) =>
              getAge(new Date(eachPet?.dateOfBirth?.seconds * 1000), false) > 90
          );
          break;
      }
    }

    if (filters.breed) {
      filteredItems = filteredItems.filter(
        (eachPet) =>
          eachPet?.breed?.toLowerCase() === filters.breed?.toLowerCase()
      );
    }
    setFilteredData(filteredItems);
  };

  const clearFilters = () => {
    setFilters({
      gender: "",
      breed: "",
      age: "",
    });
    setShowFilters(false);
  };

  return (
    <View style={styles.container}>
      <TopBar title="Home" />

      <Text style={styles.heading}>Find Your Forever friend</Text>
      <View style={styles.searchbarWrapper}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ flex: 1 }}
        />
        <AntDesign
          onPress={() => setShowFilters((prev) => !prev)}
          name={showFilters ? "close" : "filter"}
          style={{ marginLeft: 8 }}
          size={34}
          color="black"
        />
      </View>

      {showFilters ? (
        <Filters
          onClearFilter={clearFilters}
          setFilters={setFilters}
          filters={filters}
          data={pets}
        />
      ) : null}

      <ScrollView style={{ width: "100%", flex: 1, paddingHorizontal: 15 }}>
        <View style={styles.petsContainer}>
          {filteredData.map((eachPet) => {
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
  searchbarWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 20,
  },
});
