import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import Registration from '../registration/Registration';
import Footer from './Footer';

const MainContainer = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Registration />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'roboto-light'
  }
});

export default MainContainer;
