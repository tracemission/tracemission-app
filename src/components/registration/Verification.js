import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import i18n from '../../util/i18n';
import InputField from './InputField';
import { Button } from 'react-native-material-ui';

const Verification = props => {
  const { navigate } = props;
  const [verificationCode, setVerificationCode] = useState();

  const onSubmit = async () => {
    // TODO Validate verification code and get token
    navigate('dashboard');
  };

  return (
    <View style={styles.bg}>
      <View style={styles.card}>
        <Text style={styles.title}>{i18n.t('VERIFICATION.TITLE')}</Text>
        <Text style={styles.welcomeText}>{i18n.t('VERIFICATION.INFO')}</Text>
        <InputField
          keyName={'verificationCode'}
          value={verificationCode}
          label={'VERIFICATION.LABEL'}
          onLiveChange={(key, text) => setVerificationCode(text)}
        />
        <Button
          onPress={() => onSubmit()}
          raised
          primary
          text={i18n.t('VERIFICATION.SUBMIT')}
        />
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
    textAlign: 'center'
  }
});

export default Verification;
