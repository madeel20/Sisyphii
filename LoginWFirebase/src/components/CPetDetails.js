import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Button as PaperButton,
  Card,
  Paragraph,
  Title,
} from "react-native-paper";
import { getFormattedDate } from "../api/utils";
import { theme } from "../core/theme";

export default function CPetDetails({ pet }) {
  return (
    <Card style={styles.container}>
      <Card.Title title={pet?.name} subtitle={pet?.breed} />
      <Card.Content>
        {/* <Title>Name: {pet?.name}</Title> */}
        <Paragraph style={{ marginTop: 12 }}>
          Species: {pet?.species},
        </Paragraph>
        <Paragraph style={{ marginTop: 12 }}>Breed: {pet?.breed} </Paragraph>
        <Paragraph style={{ marginTop: 12 }}>Gender: {pet?.gender} </Paragraph>
        <Paragraph styl e={{ marginTop: 12 }}>
          Date Of Birth: {getFormattedDate(new Date(pet?.dateOfBirth?.seconds * 1000))}{" "}
        </Paragraph>
        <Paragraph styl e={{ marginTop: 12 }}>
          Homing Status: {pet?.homeStatus}{" "}
        </Paragraph>
        <Paragraph styl e={{ marginTop: 12 }}>
          Dessex Status: {pet?.desexStatus}{" "}
        </Paragraph>
        <Paragraph >
          Vaccinated: {pet?.vaccination},
        </Paragraph>
      </Card.Content>
      <Card.Cover 
        source={{
          uri: pet?.image || "https://thumbs.dreamstime.com/b/dog-collection-chihuahua-geometric-style-avatar-icon-round-set-88200175.jpg",
        }}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingBottom:30
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});
