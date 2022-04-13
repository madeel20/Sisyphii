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
import 'firebase/storage'
import "firebase/auth";
import Background from "../../components/Background";
import { theme } from "../../core/theme";
import CImagePicker from "../../components/CImagePicker";
import { storage } from "../../../App";
import { uploadImage } from "../../api/utils";

function AddPetForm({ navigation, route }) {
  const { pet = null, petId = null } = route.params || {};
  const [values, setValues] = useState(
    pet
      ? {
          ...pet,
          dateOfBirth: new Date(pet?.dateOfBirth?.seconds * 1000),
        }
      : {
          name: "",
          dateOfBirth: new Date(),
          species: "",
          breed: "",
          gender: "male",
          desexStatus: "",
          vaccination: "vaccinated",
          homeStatus: "",
          image: '',
        }
  );
  const [loading, setLoading] = useState(false);
  const [isImageChanged,  setIsImageChanged] = useState(false);

  useEffect(() => {
    console.log('route.params?.pet',route.params?.pet)
    setValues(
      route.params?.pet
        ? {
            ...route.params?.pet,
            dateOfBirth: new Date(route.params?.pet?.dateOfBirth?.seconds * 1000),
          }
        : {
            name: "",
            dateOfBirth: new Date(),
            species: "",
            breed: "",
            gender: "male",
            desexStatus: "",
            vaccination: "vaccinated",
            homeStatus: "",
            image: '',
          }
    );
  }, [route.params?.pet]);

  const onSubmit = async () => {
    if (Object.values(values).some((e) => !e)) {
      alert("Please fill all the fields!");
      return;
    }
    setLoading(true);
  let payload = {...values};
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
          
          if(values.image) {
          let url = await uploadImage({
            name: 'abc.png',
            image: values.image
          });

          await res.update({
             image:  url
          })
        }

          setValues({
            name: "",
            dateOfBirth: new Date(),
            species: "",
            breed: "",
            gender: "male",
            desexStatus: "",
            vaccination: "vaccinated",
            homeStatus: "",
            image: '',
          });
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

          if(values.image && isImageChanged) {
            let url = await uploadImage({
              name: 'abc.png',
              image: values.image
            });
            await  firebase
            .firestore()
            .collection("pets")
            .doc(petId)
            .update({
              image:  url
            });
          }

          setValues({
            name: "",
            dateOfBirth: new Date(),
            species: "",
            breed: "",
            gender: "male",
            desexStatus: "",
            vaccination: "vaccinated",
            homeStatus: "",
            image: '',
          });
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
  }

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

        <TextInput
          label="Desex Status"
          returnKeyType="next"
          value={values?.desexStatus}
          onChangeText={(text) =>
            setValues((prev) => ({ ...prev, desexStatus: text }))
          }
          autoCapitalize="none"
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

        <TextInput
          label="Home Status"
          returnKeyType="next"
          value={values?.homeStatus}
          onChangeText={(text) =>
            setValues((prev) => ({ ...prev, homeStatus: text }))
          }
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
