import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import { SimpleLineIcons, Feather, AntDesign, Ionicons } from '@expo/vector-icons';

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const onPlusClicked = () => {
        console.warn("plus pressed")
        
    }

    const sendMessage = () => {
        console.warn('message', message)
        setMessage('');

    }

    const onPress = () => {
        if (message) {
            sendMessage();
        }else {
            onPlusClicked();
        }
    }

    return (
        <KeyboardAvoidingView style={styles.root} keyboardVerticalOffset={100} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.inputContainer}>
                <SimpleLineIcons style={styles.icon} name="emotsmile" size={24} color="darkgrey" />
                
                <TextInput 
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder='Type Message...' 
                />
                
                <Feather style={styles.icon}name="camera" size={24} color="black" />
            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
                {message ? <Ionicons name="ios-send" size={18} color="white" /> : <AntDesign name="plus" size ={24} color="white"/>}
            </Pressable>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
    },
    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
    },
    icon: {
        marginHorizontal: 5,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
    },
    buttonContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#3777f0',
        borderRadius: 25, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 35,
    }
})

export default MessageInput
