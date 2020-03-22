import React from 'react';
import { View, StyleSheet } from 'react-native';
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
        <QRCodeDisplay style={styles.code} id={userData.id} />
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
  container: {
    alignItems: 'center'
  },
  code: {
    alignSelf: 'center'
  }
});

export default Profile;
