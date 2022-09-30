import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from '@rneui/base'
import { auth } from '../firebase'
const HomeScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal',
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => <View style={{ marginLeft: 20 }}>
        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
      </View>
    })

    return () => {

    };
  }, [])
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})