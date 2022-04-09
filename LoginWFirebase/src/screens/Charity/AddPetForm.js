import React, { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { CDatePicker } from "../../components/CDatePicker";
import CSelect from "../../components/CSelect";
import firebase from "firebase/app";
import "firebase/auth";
import Background from "../../components/Background";
import { theme } from "../../core/theme";
import CImagePicker from "../../components/CImagePicker";

function AddPetForm({ navigation }) {
  const [values, setValues] = useState({
    name: "",
    dateOfBirth: new Date(),
    species: "",
    breed: "",
    gender: "Male",
    desexStatus: "Desexed",
    vaccination: "Vaccinated",
    homeStatus: "Adopted",
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    if (Object.values(values).some((e) => !e)) {
      alert("Please fill all the fields!");
      return;
    }
    setLoading(true);
    firebase
      .firestore()
      .collection("pets")
      .add({
        uid: firebase.auth().currentUser.uid,
        ...values,
      })
      .then((res) => {
        alert("Pet added!");
        setValues({
          name: "",
          dateOfBirth: new Date(),
          species: "",
          breed: "",
          gender: "Male",
          desexStatus: "Desexed",
          vaccination: "Vaccinated",
          homeStatus: "Adopted",
        });
        navigation.navigate("PetList");
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <Background>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </Background>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Add a Pet</Text>
        <TextInput
          label="Name"
          returnKeyType="next"
          value={values?.name}
          onChangeText={(text) =>
            setValues((prev) => ({ ...prev, name: text }))
          }
          autoCapitalize="none"
        />
        <CDatePicker
          selectedDate={values.dateOfBirth || new Date()}
          onChange={(date) =>
            setValues((prev) => ({ ...prev, dateOfBirth: date }))
          }
        />
        <TextInput
          label="Species"
          returnKeyType="next"
          value={values?.species}
          onChangeText={(text) =>
            setValues((prev) => ({ ...prev, species: text }))
          }
          autoCapitalize="none"
        />

        <TextInput
          label="Breed"
          returnKeyType="next"
          value={values?.breed}
          onChangeText={(text) =>
            setValues((prev) => ({ ...prev, breed: text }))
          }
          autoCapitalize="none"
        />

        <CSelect
          label="Gender"
          value={values?.gender}
          setValue={(value) =>
            setValues((prev) => ({ ...prev, gender: value }))
          }
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
        />

        <CSelect
          label="Desex Status"
          value={values?.desexStatus}
          setValue={(value) =>
            setValues((prev) => ({ ...prev, desexStatus: value }))
          }
          options={[
            { label: "Desexed", value: "Desexed" },
            { label: "Not Desexed", value: "notDesexed" },
          ]}
        />

        <CSelect
          label="Vaccination Status"
          value={values?.vaccination}
          setValue={(value) =>
            setValues((prev) => ({ ...prev, vaccination: value }))
          }
          options={[
            { label: "Vaccinated", value: "Vaccinated" },
            { label: "Not Vaccinated", value: "notVaccinated" },
          ]}
        />

        <CSelect
          label="Homing Status"
          value={values?.homeStatus}
          setValue={(value) =>
            setValues((prev) => ({ ...prev, homeStatus: value }))
          }
          options={[
            { label: "Adopted", value: "Adopted" },
            { label: "Being Fostered", value: "beingFostered" },
            { label: "At Adoption Centre", value: "atCentre" },
          ]}
        />

        <CImagePicker
          image={values.image}
          setImage={(image) => setValues((prev) => ({ ...prev, image }))}
        />

        <Button mode="contained" onPress={onSubmit} style={{ width: 300 }}>
          Add Pet
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    marginVertical: 40,
    marginBottom: 20,
  },
});

export default AddPetForm;
