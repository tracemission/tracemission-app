import React from 'react';
import { View } from 'react-native';
import QRCodeDisplay from '../tracker/QRCodeDisplay';

const Profile = () => {
  return (
    <View>
      <QRCodeDisplay id={'Test'} />
    </View>
  );
};

export default Profile;
