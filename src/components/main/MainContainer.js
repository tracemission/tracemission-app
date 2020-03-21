import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Registration from '../registration/Registration';
import Landing from '../registration/Landing';
import Dashboard from '../dashboard/Dashboard';

const MainContainer = () => {
  const [view, setView] = useState('landing');
  const navigate = destination => {
    setView(destination);
  };

  const viewComponent = {
    landing: <Landing navigate={navigate} />,
    registration: <Registration navigate={navigate} />,
    dashboard: <Dashboard navigate={navigate} />
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

export default MainContainer;
