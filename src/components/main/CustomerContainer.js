import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Registration from '../registration/Registration';
import Landing from '../registration/Landing';
import Dashboard from '../dashboard/Dashboard';
import Verification from '../registration/Verification';
import { Button } from 'react-native-material-ui';
import { clearItem } from '../../util/StorageService';

const CustomerContainer = props => {
  const { userId, token, setUserId, setToken } = props;
  const [view, setView] = useState(
    token ? 'dashboard' : userId ? 'verification' : 'landing'
  );
  const navigate = destination => {
    setView(destination);
  };

  const viewComponent = {
    landing: <Landing navigate={navigate} />,
    registration: <Registration navigate={navigate} setUserId={setUserId} />,
    dashboard: <Dashboard navigate={navigate} userId={userId} token={token} />,
    verification: <Verification navigate={navigate} userId={userId} />
  }[view];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFFFF', '#99AAED']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.container}
      >
        {viewComponent}
      </LinearGradient>
      <Button
        onPress={() => {
          clearItem('userId');
        }}
        text={'[DEV] Clear storage'}
      />
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

export default CustomerContainer;
