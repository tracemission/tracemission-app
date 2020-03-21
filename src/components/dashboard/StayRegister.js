import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-material-ui';

const StayRegister = props => {
  const { navigate, setScannerStarted } = props;

  return (
    <View>
      <Button onPress={() => setScannerStarted(true)} text="Scan" />
    </View>
  );
};

export default StayRegister;
