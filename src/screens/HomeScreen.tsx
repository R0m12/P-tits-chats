import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import { Routes } from '../navigation/Routes';


export const Home = ({navigation}) => (
    <View>
        <Text> Voir les chats ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.FOXES_SCREEN)}></TouchableOpacity>
    </View>
)