import React from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const IncidentList = () => {
    return (
        <View style={{marginTop: 15}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Bisherige Aufenthalte</Text>
            <Card>
                <ListItem title={'München Hbf'} subtitle={'22 Weitere Besucher'} badge={{value: '10:32 - 10:50'}} bottomDivider />
                <ListItem title={'Starbucks Berlin Hbf'} subtitle={'43 Weitere Besucher'} badge={{value: '06:25 - 10:38'}} />
            </Card>
        </View>
    );
};

export default IncidentList;