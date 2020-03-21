import React, { useState } from 'react';
import i18n from '../../util/i18n';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-material-ui';
import InputField from './InputField';
import superagent from 'superagent';
import { setItem } from '../../util/StorageService';

const Registration = props => {
  const { navigate, setUserId } = props;
  const [input, setInput] = useState({
    firstName: 'Mr',
    lastName: 'Frontend',
    phone: '+49123456789'
  });

  const onLiveChange = (key, text) => {
    const newInput = { ...input };
    newInput[key] = text;
    setInput(newInput);
  };

  const onSubmit = () => {
    if (!isInputComplete()) {
      return;
    }
    superagent
      .post(`${process.env.BASE_URL}/person`)
      .send(input)
      .set('Accept', 'application/json')
      .then(async res => {
        if (res && res.status === 200 && res.body && res.body.id) {
          await setItem('userId', res.body.id);
          setUserId(res.body.id);
          navigate('verification');
        }
      })
      .catch(err => {
        alert('oh no');
        console.log(err);
      });
  };

  const isInputComplete = () => {
    const inputs = Object.values(input);
    return inputs.every(value => value.length > 0);
  };

  const labels = {
    firstName: 'REGISTRATION.FIRSTNAME',
    lastName: 'REGISTRATION.LASTNAME',
    phone: 'REGISTRATION.PHONE'
  };

  return (
    <View style={styles.bg}>
      <View style={styles.card}>
        <Button
          style={{ container: styles.closeButton }}
          onPress={() => navigate('landing')}
          icon="close"
          text=""
        />
        <View style={styles.center}>
          <Text style={styles.title}>{i18n.t('REGISTRATION.TITLE')}</Text>

          {Object.keys(labels).map(key => (
            <InputField
              key={key}
              keyName={key}
              value={input[key]}
              label={labels[key]}
              onLiveChange={onLiveChange}
            />
          ))}

          <Text style={styles.info}>{i18n.t('REGISTRATION.CONSENT')}</Text>
          <Button
            onPress={() => onSubmit()}
            raised
            primary
            text={i18n.t('REGISTRATION.SUBMIT')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 32
  },
  card: {
    flex: 0.8,
    width: '90%',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    padding: 16,
    justifyContent: 'center'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  info: {
    color: '#747474',
    margin: 16,
    textAlign: 'center'
  },
  closeButton: {
    width: 64,
    alignSelf: 'flex-end'
  }
});

export default Registration;
