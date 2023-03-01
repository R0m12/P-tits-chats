import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';

const RefreshButton = ({refetch}) => {

    return (
        <Button onPress={refetch}>
            <Text>Voir de nouveaux chats</Text>
        </Button>
    );
};

export default RefreshButton;