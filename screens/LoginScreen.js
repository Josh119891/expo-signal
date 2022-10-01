import { View, Text, KeyboardAvoidingView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, Input, Image } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";


const LOGO_URL = 'https://assets.mofoprod.net/network/images/signal_logo.width-250.jpg'
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        navigation.replace("Home")
      }
    })
    return unsubscribe;
  }, [navigation])

  const signIn = () => { };
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: LOGO_URL
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button containerStyle={styles.button} onPress={signIn} title={"login"} />
      <Button
        containerStyle={styles.button}
        type="outline"
        onPress={() => navigation.navigate("Register")}
        title={"Register"}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
