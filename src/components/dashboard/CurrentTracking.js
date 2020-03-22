import React, { useState } from 'react';
import i18n from '../../util/i18n';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const CurrentTracking = props => {
  const { setScannedId } = props;
  const [visitStarted, setVisitStarted] = useState(false);

  const endOnPress = () => {
    setScannedId(false);
    setVisitStarted(false);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.subtitle}>{i18n.t('DASHBOARD.TRACKING.TITLE')}</Text>

      {visitStarted ? (
        <View style={styles.cardWrapper}>
          <View style={styles.card}>
            <Image
              source={require('../../../assets/signedIn.png')}
              style={styles.icon}
            />
            <Text>
              {i18n.t('DASHBOARD.ACTIVE_TRACKING.YOU_ARE_REGISTERED')}
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
              Starbucks Cafe {'\n'} München Hbf
            </Text>
            <Text>{i18n.t('DASHBOARD.ACTIVE_TRACKING.AS_GUEST')}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonAfter}
            onPress={() => endOnPress()}
          >
            <Text style={styles.buttonTextAfter}>
              {i18n.t('DASHBOARD.ACTIVE_TRACKING.STOP_TRACKING')}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.cardWrapper}>
          <View style={styles.card}>
            <Image
              source={require('../../../assets/scanApproved.png')}
              style={styles.icon}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
              {i18n.t('DASHBOARD.ACTIVE_TRACKING.QR_CODE_IDENTIFIED')}
            </Text>
            <Text>Starbucks Cafe München Hbf</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonBefore}
            onPress={() => setVisitStarted(true)}
          >
            <Text style={styles.buttonTextBefore}>
              {i18n.t('DASHBOARD.ACTIVE_TRACKING.START_TRACKING')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  },
  cardWrapper: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#3351CE',
    width: '100%',
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 35
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 8,
    height: 70,
    width: 70
  },
  buttonBefore: {
    position: 'absolute',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#3351CE',
    backgroundColor: '#3351CE',
    width: '70%',
    padding: 7
  },
  buttonAfter: {
    position: 'absolute',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#3351CE',
    backgroundColor: '#FFFFFF',
    width: '70%',
    padding: 7
  },
  buttonTextBefore: {
    color: '#FFFFFF',
    fontSize: 15
  },
  buttonTextAfter: {
    color: '#3351CE',
    fontSize: 15
  }
});

export default CurrentTracking;
