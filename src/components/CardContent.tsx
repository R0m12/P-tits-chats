import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { FileSystem } from 'expo';
import { Route } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Routes } from '../navigation/Routes';

interface ItemProps {

}
type NavProps = {
  navigation: NavigationProp<Route>
  item: {
    id: string;
    url: string;
    width: number;
    height: number;
  }
}

export const CardContent = (props: NavProps) => {
  /* const [uri, setUri] = useStateprops.item.url);
  console.log('Finished downloading to ', props.item.url);
  const downloadImage = async () => {
    try {
      const result = await FileSystem.downloadAsync(
        item.url,
        FileSystem.documentDirectory + `${item.id}.jpg`
      );
      setUri(result.uri);
      console.log('Finished downloading to ', result.uri);

    } catch (error) {
      console.error(error);
    }
  }; */

  return (
    <Card style={styles.container}>
      <Card.Content>
        <TouchableOpacity onPress={() => props.navigation.navigate(Routes.ZOOMED_CATS_SCREEN, { url: props.item.url })}>
          <Image
            source={{
              uri: props.item.url,
            }}
            style={{ width: '100%', height: 225 }}
            resizeMode='cover'
          />
        </TouchableOpacity>
      </Card.Content>
    </Card>
  )
};

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
  headerText: {
    textAlign: "center",
    marginBottom: 12,
    color: "white",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  data: {
    fontStyle: 'italic',
  },
});