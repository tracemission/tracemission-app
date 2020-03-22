import React from 'react';
import i18n from '../../util/i18n';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

const ActionButtons = props => {
  const { setScannerStarted, navigate } = props;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.subtitle}>{i18n.t('DASHBOARD.TRACKING.TITLE')}</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <TouchableOpacity onPress={() => setScannerStarted(true)}>
            <Image
              source={require('../../../assets/scanner.png')}
              style={styles.icon}
            />
            <Text style={styles.buttonLabel}>
              {i18n.t('DASHBOARD.TRACKING.SCANNER')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigate('profile')}>
            <Image
              source={require('../../../assets/code.png')}
              style={styles.icon}
            />
            <Text style={styles.buttonLabel}>
              {i18n.t('DASHBOARD.TRACKING.CODE')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 48,
    width: '100%'
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '49%',
    paddingVertical: 16,
    paddingHorizontal: 32,
    justifyContent: 'center'
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 8
  },
  buttonLabel: {
    textAlign: 'center'
  }
});

export default ActionButtons;
