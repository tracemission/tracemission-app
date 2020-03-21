import React from 'react';
import i18n from '../../util/i18n';
import { Button } from 'react-native-material-ui';
import { View, Text } from 'react-native';

const Landing = props => {
  const { navigate } = props;
  return (
    <View>
      <Text>
        {i18n.t('LANDING.WELCOME.TITLE', {
          title: i18n.t('TITLE')
        })}
      </Text>
      <Text>{i18n.t('LANDING.WELCOME.TEXT')}</Text>
      <Button
        onPress={() => {
          navigate('registration');
        }}
        raised
        primary
        text={i18n.t('LANDING.START')}
      />
    </View>
  );
};

export default Landing;
