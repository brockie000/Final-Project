import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Users from '../assets/Data/Users1';
import FriendsItem from '../components/FriendsItem';

export default function FriendScreen() {

  return (
    <View>

    <FlatList 
    data={Users}
    renderItem={({ item }) => <FriendsItem users={item} />}
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