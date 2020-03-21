import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Scanner from './src/components/Scanner';

export default function App() {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Scanner onScanned={(data) => alert(`Bar code scanned: ${data}`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
