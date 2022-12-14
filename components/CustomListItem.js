import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from '@rneui/base'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'


const AVATAR_URL = 'http://www.zooniverse.org/assets/simple-avatar.png';

const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection('chats').doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => setChatMessages(snapshot.docs.map((doc) => doc.data())))
    return unsubscribe;
  }, [id])

  return (
    <ListItem key={id} onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar rounded source={{
        uri: chatMessages?.[0]?.photoUrl || AVATAR_URL
      }} />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title >
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem >
  )
}

export default CustomListItem

const styles = StyleSheet.create({})