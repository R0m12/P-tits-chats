import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { NavigationProps } from '../navigation/Routes';
import { Image } from "react-native"

export default function ZoomedCatScreen(props: NavigationProps) {
    const URI = props?.route?.params?.url

    return (
        <SafeAreaView style={styles.safeContainer}>
            <Image source={{ uri: URI }}
                style={styles.img} />
        </SafeAreaView>
    )
}
const largeurMaximale = Dimensions.get('screen').width;
const hauteurMaximale = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    img: {
        width: largeurMaximale,
        height: hauteurMaximale,
        resizeMode: 'contain'
    }
});