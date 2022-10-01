import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { db } from '../firebase';

const AddChat = ({ navigation }) => {
  const [input, setInput] = useState('');
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        navigation.replace('Login');
      }
    });
    return unsubscribe;
  }, [navigation]);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a new chat',
      headerBackTitle: 'Chats ',
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection('chats')
      .add({ chatName: input })
      .then(() => navigation.goBack())
      .catch((err) => alert(err));
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={<Icon name="wechat" title="antdesign" size={24} color="black" />}
      />
      <Button disabled={!input} onPress={createChat} title="Create new Chat" />
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'White',
    padding: 30,
    height: '100%',
  },
});
