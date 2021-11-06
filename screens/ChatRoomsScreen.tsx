import React from 'react';
import { FlatList, Text, View, SafeAreaView } from 'react-native';
import Message from '../components/Message/Message';
import Chats from '../assets/Data/Chats';
import MessageInput from '../components/MessageInput/MessageInput';
import { useRoute } from '@react-navigation/native';


export default function ChatRoomsScreen() {
    const route = useRoute();

    console.warn(route.params?.id);
    return (
        <SafeAreaView>
            <FlatList
            data={Chats.messages}
            renderItem={({item}) => <Message message={item} />}
            />
            <MessageInput />
        </SafeAreaView>
    )
}