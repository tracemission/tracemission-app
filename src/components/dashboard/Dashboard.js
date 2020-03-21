import React from 'react';
import { Text, View } from 'react-native';
import StayRegister from './StayRegister';
import IncidentList from './IncidentList';

const Dashboard = () => {
    return (
        <View>
            <Text>Hallo _Vorname_</Text>
            <StayRegister />
            <IncidentList />
        </View>
      );
};

export default Dashboard;
