import { Button, Input } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState, useLayoutEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

import { auth } from '../firebase';

const AVATAR_URL = 'http://www.zooniverse.org/assets/simple-avatar.png';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back to login',
    });
  }, [navigation]);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name, photoURL: imageUrl || AVATAR_URL });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>Create a Singal account</Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Full name" autoFocus value={name} onChangeText={(text) => setName(text)} />
        <Input placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
        <Input placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} />
        <Input placeholder="Image URL (optional)" value={imageUrl} onChangeText={(text) => setImageUrl(text)} onSubmitEditing={register} />
      </View>
      <Button raised containerStyle={styles.button} title="Register" onPress={register} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  button: { width: 200, marginTop: 10 },
  inputContainer: { width: 300 },
  title: { marginBottom: 50, fontSize: 30 },
});
