import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import env from '../../util/env';

const Footer = () => {
  return (
    <View>
      <Text style={styles.text}>Version {env.VERSION}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'roboto-light'
  }
});

export default Footer;
