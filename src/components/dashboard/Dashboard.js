import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ActionButtons from './ActionButtons';
import IncidentList from './IncidentList';
import CurrentTracking from './CurrentTracking';
import Scanner from '../tracker/Scanner';
import SampleQRCode from './SampleQRCode';

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
            <View>
              {/* QR CODE USAGE TO BE FOUND IN THE SAMPLE FILE*/}
              <SampleQRCode id="ABC123" />
              {/* PLEASE USE IT AS SHOWCASED IN THE FILE, DO NOT IMPORT THE SAMPLE ITSELF */}

              <ActionButtons setScannerStarted={setScannerStarted}/>
            </View>
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
