import React, { useState } from 'react';
import i18n from '../../util/i18n';
import { Text, View, StyleSheet } from 'react-native';
import ActionButtons from './ActionButtons';
import IncidentList from './IncidentList';
import CurrentTracking from './CurrentTracking';
import Scanner from '../tracker/Scanner';

const Dashboard = props => {
  const { navigate, userData } = props;
  const [scannerStarted, setScannerStarted] = useState(false);
  const [scannedId, setScannedId] = useState(false);

  return (
    <View style={[StyleSheet.absoluteFillObject, styles.bg]}>
      {scannerStarted ? (
        <View style={StyleSheet.absoluteFillObject}>
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
          <Text style={styles.title}>
            {i18n.t('DASHBOARD.TITLE', {
              name: userData.firstName
            })}
          </Text>
          <Text style={styles.infoText}>{i18n.t('DASHBOARD.INTRO')}</Text>
          {scannedId ? (
            <CurrentTracking />
          ) : (
            <ActionButtons
              setScannerStarted={setScannerStarted}
              navigate={navigate}
            />
          )}
          {/* <CurrentTracking /> */}
          <IncidentList />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#E5E5E5'
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 48,
    width: '100%'
  },
  title: {
    fontSize: 24
  },
  infoText: {
    marginTop: 32,
    marginBottom: 32
  }
});

export default Dashboard;
