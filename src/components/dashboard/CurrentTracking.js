import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

const CurrentTracking = () => {
    return (
        <View>
            <Card>
                <Text style={{fontWeight: 'bold'}}>Sie befinden sich jetzt hier:</Text>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>Starbucks Cafe</Text>
                <Text style={{fontWeight: 'bold', color: '#788896', fontSize: 30}}>1:33 min</Text>
                <Button title='Aufenthalt Beenden'/>
            </Card>
        </View>
    );
}

export default CurrentTracking;