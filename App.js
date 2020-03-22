import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import superagent from 'superagent';
import CustomerContainer from './src/components/main/CustomerContainer';
import StoreContainer from './src/components/main/StoreContainer';
import { getItem } from './src/util/StorageService';
import { ThemeContext, getTheme } from 'react-native-material-ui';
import uiTheme from './src/util/mainStyle';
import * as i18n from './src/util/i18n';
import env from './src/util/env';
import { KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';

i18n.init();
const App = () => {
  const [ready, setReady] = useState(false);
  const [userData, setUserData] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    asyncInit();
  }, []);

  const asyncInit = async () => {
    await Font.loadAsync({
      'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-light': require('./assets/fonts/Roboto-Light.ttf')
    });
    const userData = await loadUserInfo(setUserData);
    setUserData(userData);
    setReady(true);
  };

  return ready ? (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <KeyboardAvoidingView
        behavior="height"
        style={StyleSheet.absoluteFillObject}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {containers[env.VARIANT]}
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemeContext.Provider>
  ) : null;
};

const loadUserInfo = async () => {
  return new Promise(async (resolve, reject) => {
    // TODO: Check initial token

    const userId = await getItem('userId');
    if (userId) {
      // Validate user id
      superagent
        .get(`${env.BASE_URL}/person/${userId}`)
        .then(res => {
          console.log(res.body);
          return resolve(res.body);
        })
        .catch(err => {
          console.log(err);
          return resolve();
        });
    } else {
      return resolve();
    }
  });
};

export default App;
