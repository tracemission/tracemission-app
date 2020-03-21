import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Card } from 'react-native-elements'

const ActionButtons = props => {
  const { navigate, setScannerStarted } = props;

  return (
    <View style={{marginTop: 15}}>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>Aufenthalt Verzeichnen</Text>
      <View style={{flexDirection: 'row'}}>      
        <TouchableWithoutFeedback onPress={() => setScannerStarted(true)} style={{flex: 1}}>
          <Card>
            <Text onPress={() => setScannerStarted(true)}>Aufhenthalt{"\n"}registrieren</Text>
          </Card>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => alert('Hello')} style={{flex: 1}}>
          <Card>
            <Text>Eigene ID</Text>
          </Card>
        </TouchableWithoutFeedback>
      </View>    
    </View>
  );
};

export default ActionButtons;
