import React from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, StatusBar } from 'react-native';
import { CardContent } from '../components/CardContent';
import RefreshButton from '../components/ResfreshButton';
import { useCats } from "../hooks/useCats";
import * as FileSystem from 'expo-file-system';
import { NavigationProps } from '../navigation/Routes';


export const FoxesScreen = (props: NavigationProps) => {
    const { data, status, refetch } = useCats();

    if (status === "loading") {
        return <Text>Loading...</Text>;
    }

    if (status === "error") {
        return <Text>Error :(</Text>;
    }
    return (
        <SafeAreaView style={styles.safeContainer}>
            <FlatList
                data={data}
                renderItem={({ item }) => <CardContent navigation={props.navigation} item={item} />}
                keyExtractor={item => item.id}
            />
            <RefreshButton refetch={refetch} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
});