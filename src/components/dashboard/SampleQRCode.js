import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import logo from '../../../assets/icon.png';

export default ({ id }) => (<QRCode
    value={process.env.QR_CODE_CONTENT.replace("%id", id)}
    // The following values are not necessary, just to showcase the possibilities
    logo={logo}
    logoSize={60}
    logoBackgroundColor='red'
    color='blue'
    backgroundColor='silver'
    size={200}
    logoMargin={10}
    logoBorderRadius={10}
    quietZone={10}
    />);