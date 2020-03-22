import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import i18n from '../../util/i18n';
import superagent from 'superagent';
import InputField from './InputField';
import { Button } from 'react-native-material-ui';

const Verification = props => {
  const { navigate, userData, setToken } = props;
  const [verificationCode, setVerificationCode] = useState('1234');

  const onSubmit = async () => {
    navigate('dashboard');
    // superagent
    //   .post(
    //     `${process.env.BASE_URL}/person/${userData.id}/verify/${verificationCode}`
    //   )
    //   .set('Accept', 'application/json')
    //   .then(async res => {
    //     if (res && res.token) {
    //       setToken(res.token);
    //       navigate('dashboard');
    //     }
    //   })
    //   .catch(err => {
    //     alert('Something went wrong.');
    //     console.log(err);
    //   });
  };

  const onRetry = async () => {
    console.log(`${process.env.BASE_URL}/person/${userData.id}/verify`);
    superagent
      .post(`${process.env.BASE_URL}/person/${userData.id}/verify`)
      .set('Accept', 'application/json')
      .then(async res => {
        alert(i18n.t('VERIFICATION.RETRY_SUCCESS'));
      })
      .catch(err => {
        alert('Something went wrong.');
        console.log(err);
      });
  };

  return (
    <View style={styles.bg}>
      <View style={styles.card}>
        <Text style={styles.title}>{i18n.t('VERIFICATION.TITLE')}</Text>
        <Text style={styles.infoText}>{i18n.t('VERIFICATION.INFO')}</Text>
        <InputField
          keyName={'verificationCode'}
          value={verificationCode}
          label={'VERIFICATION.LABEL'}
          onLiveChange={(key, text) => setVerificationCode(text)}
        />
        <Button
          onPress={() => onSubmit()}
          style={{ container: styles.submit }}
          raised
          primary
          disabled={verificationCode.length === 0}
          text={i18n.t('VERIFICATION.SUBMIT')}
        />
        <Button onPress={() => onRetry()} text={i18n.t('VERIFICATION.RETRY')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
  card: {
    flex: 0.5,
    width: '90%',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  infoText: {
    textAlign: 'center',
    marginVertical: 16
  },
  submit: {
    marginVertical: 16
  }
});

export default Verification;
