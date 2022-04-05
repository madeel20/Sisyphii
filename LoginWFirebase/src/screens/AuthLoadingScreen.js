import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import firebase from "firebase/app";
import Background from "../components/Background";
import { theme } from "../core/theme";

export default function AuthLoadingScreen({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
       setUser(user)
      } else {
        // User is not logged in
        navigation.reset({
          routes: [{ name: "StartScreen" }],
        });
      }
    });
  }, []);

  useEffect(()=>{
      if(user){
        firebase.firestore().collection('charity').doc(user.uid).get().then(res=>{
          if(res.exists){
            navigation.reset({
              routes: [{ name: "CharityStack" }],
            });
          }
          else {
             // User is not logged in
              navigation.reset({
                routes: [{ name: "UserStack" }],
              });
          }
        })
      }
  },[user])

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
}
