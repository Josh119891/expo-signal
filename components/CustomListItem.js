import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from '@rneui/base'
import React from 'react'
import { AVATAR_URL } from '../settings'

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar rounded source={{
        uri: AVATAR_URL
      }} />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
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