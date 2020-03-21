import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ActionButtons from './ActionButtons';
import IncidentList from './IncidentList';
import CurrentTracking from './CurrentTracking';
import Scanner from '../tracker/Scanner';

const Dashboard = props => {
  const { navigate } = props;
  const [scannerStarted, setScannerStarted] = useState(false);
  const [scannedId, setScannedId] = useState(false);

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
        <View style={styles.container}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>Hallo _Vorname_</Text>
          {scannedId ? (
            <CurrentTracking />
          ) : (
            <ActionButtons setScannerStarted={setScannerStarted}/>
          )}
          <IncidentList />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      marginVertical: 30,
      width: '100%'
    }
  });

export default Dashboard;
