import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from '@rneui/base'
import React from 'react'

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar rounded source={{
        uri: "http://www.zooniverse.org/assets/simple-avatar.png"
      }} />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          Youtube Chat
        </ListItem.Title >
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test Subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem >
  )
}

export default CustomListItem

const styles = StyleSheet.create({})