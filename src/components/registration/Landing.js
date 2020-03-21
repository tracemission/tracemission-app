import React from 'react';
import i18n from '../../util/i18n';
import { Button } from 'react-native-material-ui';
import { View, Text, StyleSheet } from 'react-native';

const Landing = props => {
  const { navigate } = props;
  return (
    <View style={styles.bg}>
      <View style={styles.card}>
        <Text style={styles.title}>
          {i18n.t('LANDING.WELCOME.TITLE', {
            title: i18n.t('TITLE')
          })}
        </Text>
        <Text style={styles.welcomeText}>{i18n.t('LANDING.WELCOME.TEXT')}</Text>
        <Button
          onPress={() => {
            navigate('registration');
          }}
          raised
          primary
          text={i18n.t('LANDING.START')}
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
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 32
  }
});

export default Landing;
