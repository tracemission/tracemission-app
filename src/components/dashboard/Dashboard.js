import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StayRegister from './StayRegister';
import IncidentList from './IncidentList';
import CurrentTracking from './CurrentTracking';
import Scanner from '../tracker/Scanner';

const Dashboard = props => {
  const { navigate } = props;
  const [scannerStarted, setScannerStarted] = useState(false);
  const [scannedId, setScannedId] = useState();

  return (
    <View style={StyleSheet.absoluteFillObject}>
      {scannerStarted ? (
        <View style={StyleSheet.absoluteFillObject}>
          <Text>Hi</Text>
          <Scanner
            style={StyleSheet.absoluteFillObject}
            onScanned={({ id }) => {
              setScannedId(id);
              setScannerStarted(false);
            }}
          />
        </View>
      ) : (
        <View>
          <Text>Hallo _Vorname_</Text>
          {scannedId ? (
            <CurrentTracking />
          ) : (
            <StayRegister setScannerStarted={setScannerStarted} />
          )}
          <IncidentList />
        </View>
      )}
    </View>
  );
};

export default Dashboard;
