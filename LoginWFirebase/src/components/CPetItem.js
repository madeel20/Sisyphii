import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Button as PaperButton,
  Card,
  Paragraph,
  Title,
} from "react-native-paper";
import { getAge } from "../api/utils";
import { theme } from "../core/theme";

export default function CPetItem({ pet, onClick }) {
  return (
    <Card onPress={onClick} style={styles.container}>
      <Card.Title title={pet?.name} subtitle={pet?.breed} />
      <Card.Content>
        <Card.Cover
          source={{
            uri: pet?.image || "https://thumbs.dreamstime.com/b/dog-collection-chihuahua-geometric-style-avatar-icon-round-set-88200175.jpg",
          }}
        />
        {/* <Title>Name: {pet?.name}</Title> */}
        <Paragraph style={{marginTop:12}}>
          Species: {pet?.species}, Breed: {pet?.breed}{" "}
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Paragraph style={{marginLeft:10}}>
          Age: {getAge(new Date(pet?.dateOfBirth?.seconds * 1000))}, Homing Status: {pet?.homeStatus}
        </Paragraph>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:20
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});
