import React from 'react';
import i18n from '../../util/i18n';
import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View>
      <Text>{i18n.t('TITLE')}</Text>
    </View>
  );
};

export default Header;
