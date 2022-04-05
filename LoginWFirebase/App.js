import React, { useEffect, useState } from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import firebase from "firebase/app";
import "firebase/auth";
import { theme } from "./src/core/theme";
import {
  AuthLoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  ProfileScreen,
  HomeScreen,
  RescueAnimalForm,
} from "./src/screens";
import { FIREBASE_CONFIG } from "./src/core/config";
import { HomeIcon, ProfileIcon } from "./src/assets/icons";
import DrawerContent from "./src/components/DrawerContent";
import CharityHome from "./src/screens/Charity/CharityHome";
import UserHome from "./src/screens/User/UserHome";
import { ActivityIndicator } from "react-native";
import Background from "./src/components/Background";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      setLoading(true);

      firebase
        .firestore()
        .collection("charity")
        .doc(user.uid)
        .get()
        .then((res) => {
          if (res.exists) {
            setRole("charity");
          } else {
            setRole("user");
          }
        })
        .finally(() => setLoading(false));
    }
  }, [user]);

  if (loading) {
    return (
      <Background>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </Background>
    );
  }

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={user ? "HomeScreen" : "AuthLoadingScreen"}
          screenOptions={{
            headerShown: false,
          }}
        >
          {!user && (
            <>
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
              />
            </>
          )}

          {user &&
            (role === "charity" ? (
              <Stack.Screen name="HomeScreen" component={CharityNavigator} />
            ) : (
              <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
            ))}

          {/* <Stack.Screen name="RescueAnimalForm" component={RescueAnimalForm} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={UserHome}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={RescueAnimalForm}
        options={{
          tabBarIcon: ({ color }) => <ProfileIcon fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="HomeScreen" component={BottomNavigation} />
    </Drawer.Navigator>
  );
}

function CharityNavigator() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="HomeScreen" component={CharityNavigation} />
    </Drawer.Navigator>
  );
}

function CharityNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={CharityHome}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={RescueAnimalForm}
        options={{
          tabBarIcon: ({ color }) => <ProfileIcon fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
