import { DataStore } from '@aws-amplify/datastore'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { Users } from '../src/models'
import { ChatRoom, ChatRoomUsers } from '../src/models'

export default function Friendsitem({users}) {

    const navigation = useNavigation()

    const onPress = async () => {
        //Create new chat room
        const newChatRoom = await DataStore.save(new ChatRoom({newMessages: 0})) 
        const dbUser = await DataStore.query(Users, '7fafaec5-ecda-41fb-96b4-499030320f5d')

        await DataStore.save(new ChatRoomUsers({
            users: dbUser,
            chatroom: newChatRoom
        }))

        await DataStore.save(new ChatRoomUsers({
            users,
            chatroom: newChatRoom
        }));

        navigation.navigate('ChatRoom', {id: newChatRoom.id});
        
    }

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image source={{uri: users.imageUri}} style={styles.image}/>
            <View style={styles.rightContainer}>
                <View style={styles.row}> 
                    <Text style={styles.name}>{users.name}</Text>
                </View>
                <Text numberOfLines={1}>{users.status}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginRight: 10,
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center'

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'

    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,

    },
    
})
