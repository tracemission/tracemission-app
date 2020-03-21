import React, { useState } from 'react';
import i18n from '../../util/i18n';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-material-ui';
import InputField from './InputField';

const Registration = props => {
  const { navigate } = props;
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    phone: ''
  });

  const onLiveChange = (key, text) => {
    const newInput = {};
    newInput[key] = text;
    setInput(newInput);
  };

  const onSubmit = () => {
    navigate('dashboard');
  };

  const labels = {};

  return (
    <View style={styles.bg}>
      <View style={styles.card}>
        <Button onPress={() => navigate('landing')} icon="close" text="" />
        <Text>{i18n.t('REGISTRATION.TITLE')}</Text>

        {Object.keys(labels).map(field => (
          <InputField />
        ))}

        <Text>{i18n.t('REGISTRATION.CONSENT')}</Text>
        <Button
          onPress={() => onSubmit()}
          raised
          text={i18n.t('REGISTRATION.SUBMIT')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%'
  },
  input: {
    height: 36,
    width: '90%',
    backgroundColor: '#E8E8E8'
  },
  card: {
    flex: 0.7,
    width: '90%',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Registration;
