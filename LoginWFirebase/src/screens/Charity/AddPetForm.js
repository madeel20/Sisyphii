import React, { useEffect, useState } from "react";
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
import "firebase/storage";
import "firebase/auth";
import Background from "../../components/Background";
import { theme } from "../../core/theme";
import CImagePicker from "../../components/CImagePicker";
import { storage } from "../../../App";
import { uploadImage } from "../../api/utils";

const defaultValues = {
  name: "",
  dateOfBirth: new Date(),
  species: "",
  breed: "",
  gender: "male",
  desexStatus: "desexed",
  vaccination: "vaccinated",
  homeStatus: "at adoption centre",
  image: "",
};

function AddPetForm({ navigation, route }) {
  const { pet = null, petId = null } = route.params || {};
  const [values, setValues] = useState(
    pet
      ? {
          ...pet,
          dateOfBirth: new Date(pet?.dateOfBirth?.seconds * 1000),
        }
      : defaultValues
  );
  const [loading, setLoading] = useState(false);
  const [isImageChanged, setIsImageChanged] = useState(false);

  useEffect(() => {
    setValues(
      route.params?.pet
        ? {
            ...route.params?.pet,
            dateOfBirth: new Date(
              route.params?.pet?.dateOfBirth?.seconds * 1000
            ),
          }
        : defaultValues
    );
  }, [route.params?.pet]);

  const onSubmit = async () => {
    if (
      Object.entries(values).some(([name, e]) => (name === "image" ? false : !e))
    ) {
      alert("Please fill all the fields!");
      return;
    }
    setLoading(true);
    let payload = { ...values };
    delete payload.image;

    if (!pet)
      firebase
        .firestore()
        .collection("pets")
        .add({
          uid: firebase.auth().currentUser.uid,
          ...payload,
        })
        .then(async (res) => {
          if (values.image) {
            let url = await uploadImage({
              name: res.id,
              image: values.image.base64,
            });

            await res.update({
              image: url,
            });
          }

          setValues(defaultValues);
          navigation.navigate("PetList");
          alert("Pet added!");
        })
        .finally(() => setLoading(false));
    else
      firebase
        .firestore()
        .collection("pets")
        .doc(petId)
        .update({
          ...payload,
        })
        .then(async (res) => {
          if (values.image && isImageChanged) {
            let url = await uploadImage({
              name: petId,
              image: values.image.base64,
            });
            await firebase.firestore().collection("pets").doc(petId).update({
              image: url,
            });
          }

          setValues(defaultValues);
          alert("Pet Updated!");
          navigation.navigate("PetList");
        })
        .finally(() => setLoading(false));
  };

  const onDelete = () => {
    setLoading(true);
    firebase
      .firestore()
      .collection("pets")
      .doc(petId)
      .delete()
      .then((res) => {
        alert("Pet Deleted!");
        setValues({
          name: "",
          dateOfBirth: new Date(),
          species: "",
          breed: "",
          gender: "male",
          desexStatus: "",
          vaccination: "vaccinated",
          homeStatus: "",
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
        <Button onPress={() => navigation.goBack()}>Go Back</Button>
        <Text style={styles.heading}>{pet ? "Edit a pet" : "Add a Pet"}</Text>
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
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
        />

        <CSelect
          label="Desex Status"
          returnKeyType="next"
          value={values?.desexStatus}
          setValue={(value) =>
            setValues((prev) => ({ ...prev, desexStatus: value }))
          }
          options={[
            { label: "Desexed", value: "desexed" },
            { label: "Not desexed", value: "not desexed" },
          ]}
        />

        <CSelect
          label="Vaccination Status"
          value={values?.vaccination}
          setValue={(value) =>
            setValues((prev) => ({ ...prev, vaccination: value }))
          }
          options={[
            { label: "Vaccinated", value: "vaccinated" },
            { label: "Not Vaccinated", value: "Not Vaccinated" },
          ]}
        />

        <CSelect
          label="Home Status"
          value={values?.homeStatus}
          setValue={(value) =>
            setValues((prev) => ({ ...prev, homeStatus: value }))
          }
          options={[
            { label: "At adoption centre", value: "at adoption centre" },
            { label: "Adopted", value: "adopted" },
            { label: "Foster", value: "foster" },
          ]}
          autoCapitalize="none"
        />

        <CImagePicker
          image={values.image}
          setImage={(image) => {
            setValues((prev) => ({ ...prev, image }));
            setIsImageChanged(true);
          }}
        />

        <Button mode="contained" onPress={onSubmit} style={{ width: 300 }}>
          {pet ? "Save" : "Add Pet"}
        </Button>
        {pet && (
          <Button onPress={onDelete} style={{ width: 300 }}>
            Delete
          </Button>
        )}
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
