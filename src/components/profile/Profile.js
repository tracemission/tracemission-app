import React from 'react';
import i18n from '../../util/i18n';
import { View, StyleSheet, Text } from 'react-native';
import QRCodeDisplay from '../tracker/QRCodeDisplay';
import { Button } from 'react-native-material-ui';

const Profile = props => {
  const { navigate, userData } = props;
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.bg]}>
      <Button
        style={{ container: styles.closeButton }}
        onPress={() => navigate('dashboard')}
        icon="close"
        text=""
      />
      <View style={styles.container}>
        <Text style={styles.name}>
          {userData.firstName} {userData.lastName}
        </Text>
        <Text>{userData.id}</Text>
        <View style={styles.qr}>
          <QRCodeDisplay id={userData.id} />
        </View>
        <Button
          raised
          style={{ container: styles.reportButton }}
          text={i18n.t('PROFILE.REPORT')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFFFFF',
    paddingTop: 32
  },
  closeButton: {
    width: 64,
    alignSelf: 'flex-end'
  },
  reportButton: {
    borderColor: '#F92968',
    borderWidth: 2
  },
  name: {
    fontWeight: 'bold'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  qr: {
    marginVertical: 32
  }
});

export default Profile;
