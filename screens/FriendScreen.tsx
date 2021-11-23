import React, {useEffect, useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import User from '../assets/Data/Users1';
import { DataStore } from '@aws-amplify/datastore';
import { Users } from '../src/models';
import FriendsItem from '../components/FriendsItem';

export default function FriendScreen() {
    const [user, setUser] = useState<Users[]>([])

    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await DataStore.query(Users);
            setUser(fetchedUsers);
        };
        fetchUsers();
    }, [])

  return (
    <View>

    <FlatList 
    data={user}
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