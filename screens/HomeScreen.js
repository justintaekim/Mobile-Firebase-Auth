import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityComponent,
  View,
} from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.replace("Login");
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>You are successfully logged in!</Text>
      {/* ? is to not enforce rendering if undefined so prevents infinite loop */}
      <Text style={styles.subText}>Username: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F8",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  mainText: {
    textAlign: "center",
    margin: 10,
    fontWeight: 500,
    fontSize: 20,
  },
  subText: {
    textAlign: "center",
    margin: 10,
    fontWeight: 300,
    fontSize: 15,
  },
});
