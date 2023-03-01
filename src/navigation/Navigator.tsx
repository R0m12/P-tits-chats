import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FoxesScreen } from '../screens/FoxesScreen';
import ZoomedCatScreen from '../screens/ZoomedCatScreen';
import { Routes } from './Routes';

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Pôtits Chats" component={FoxesScreen} />
      <Stack.Screen name={Routes.ZOOMED_CATS_SCREEN} component={ZoomedCatScreen} />
    </Stack.Navigator>
  );
}