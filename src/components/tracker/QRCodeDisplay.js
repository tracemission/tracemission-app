import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import logo from '../../../assets/icon.png';

const QRCodeDisplay = props => {
  const { id } = props;
  const placeholder = process.env.QR_CODE_CONTENT;
  return (
    <QRCode
      value={placeholder.replace('%id', id)}
      logo={logo}
      logoSize={60}
      logoBackgroundColor="#3351CE"
      color="black"
      backgroundColor="white"
      size={200}
      logoMargin={10}
      logoBorderRadius={10}
      quietZone={10}
    />
  );
};

export default QRCodeDisplay;
