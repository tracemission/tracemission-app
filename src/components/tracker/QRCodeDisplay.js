import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import logo from '../../../assets/smallIcon.png';
import env from '../../util/env';

const QRCodeDisplay = props => {
  const { id } = props;
  const placeholder = env.QR_CODE_CONTENT;
  return (
    <QRCode
      value={placeholder.replace('%id', id)}
      logo={logo}
      logoSize={60}
      logoBackgroundColor="white"
      color="black"
      backgroundColor="white"
      size={300}
      logoBorderRadius={0}
      quietZone={10}
    />
  );
};

export default QRCodeDisplay;
