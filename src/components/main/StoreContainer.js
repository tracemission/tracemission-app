import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Registration from '../registration/Registration';
import Landing from '../registration/Landing';
import Dashboard from '../dashboard/Dashboard';
import Verification from '../registration/Verification';
import { Button } from 'react-native-material-ui';
import { clearItem } from '../../util/StorageService';

const StoreContainer = props => {
  const { userData, token, setUserData, setToken } = props;
  const [view, setView] = useState(
    token ? 'dashboard' : userData ? 'verification' : 'landing'
  );
  const navigate = destination => {
    setView(destination);
  };

  const viewComponent = {
    landing: <Landing navigate={navigate} />,
    registration: (
      <Registration navigate={navigate} setUserData={setUserData} />
    ),
    dashboard: (
      <Dashboard navigate={navigate} userData={userData} token={token} />
    ),
    verification: <Verification navigate={navigate} userData={userData} />
  }[view];

  return (
    <View style={styles.container}>
      <Text>Welcome to your store!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
    width: '100%'
  }
});

export default StoreContainer;
