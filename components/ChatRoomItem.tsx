import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import ChatRoomsScreen from '../screens/ChatRoomsScreen'

export default function ChatRoomItem({users}) {
    const from = users.users[1]

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('ChatRoom', {id: users.id});
    }

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image source={{uri: from.imageUri}} style={styles.image}/>
            <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{users.pending}</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.row}> 
                    <Text style={styles.name}>{from.name}</Text>
                    <Text style={styles.text}>11:11am</Text>
                </View>
                <Text numberOfLines={1} style={styles.text}>{users.lastMessage.content}</Text>
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
    badgeContainer: {
        backgroundColor: '#3777f0',
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
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
    text: {
        color: 'grey'
    },
    
})
