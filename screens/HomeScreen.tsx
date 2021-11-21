import Auth from '@aws-amplify/auth';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import data from '../assets/Data/ChatRooms';
import ChatRoomItem from '../components/ChatRoomItem';

export default function TabOneScreen() {
  data.map((users) => (
    console.log(users)
  ))


  return (
    <View>

    <FlatList 
    data={data}
    renderItem={({ item }) => <ChatRoomItem users={item} />}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'blue',
  }
})