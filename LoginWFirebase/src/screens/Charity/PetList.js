import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Button from "../../components/Button";
import TopBar from "../../components/TopBar";
import firebase from "firebase/app";
import "firebase/auth";
import CPetItem from "../../components/CPetItem";

export default function PetList({ navigation }) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      firebase
        .firestore()
        .collection("pets")
        .where("uid", "==", firebase.auth().currentUser.uid)
        .get()
        .then((res) => {
          setPets(res.docs);
        });
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  return (
    <>
      <TopBar title="Home" />
      <View style={styles.container}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("AddAPetForm",{pet:null,petId:null})}
          style={{ width: 300 }}
        >
          Add a Pet
        </Button>

        <Text style={styles.heading}>My Pets</Text>

        <ScrollView style={{ width: "100%", flex: 1, paddingHorizontal: 15 }}>
          <View style={styles.petsContainer}>
            {pets.map((eachPet) => {
              return (
                <CPetItem
                key={eachPet.id}
                  onClick={() =>
                    navigation.navigate("AddAPetForm", {
                      pet: eachPet.data(),
                      petId: eachPet.id,
                    })
                  }
                  pet={eachPet.data()}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    marginVertical: 20,
  },
  petsContainer: {
    width: "100%",
    flex: 1,
  },
});
