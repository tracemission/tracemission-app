import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CurrentTracking = () => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold' }}>Sie befinden sich jetzt hier:</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Starbucks Cafe</Text>
      <Text style={{ fontWeight: 'bold', color: '#788896', fontSize: 30 }}>
        1:33 min
      </Text>
      <Button title="Aufenthalt Beenden" />
    </View>
  );
};

export default CurrentTracking;
