import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View, Pressable } from 'react-native'

export default function Friendsitem({users}) {

    const navigation = useNavigation()

    const onPress = () => {
        //create chatroom
    }

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image source={{uri: users.imageUri}} style={styles.image}/>
            <View style={styles.rightContainer}>
                <View style={styles.row}> 
                    <Text style={styles.name}>{users.name}</Text>
                </View>
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
