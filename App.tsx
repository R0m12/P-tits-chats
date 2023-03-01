import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider, QueryClient } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigation/Navigator';

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigator /> 
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
