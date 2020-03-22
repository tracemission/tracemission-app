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

i18n.init();
const App = () => {
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    asyncInit(setUserId).then(() => {
      setReady(true);
    });
  });

  const containers = {
    customer: (<CustomerContainer
      userId={userId}
      setUserId={setUserId}
      token={token}
      setToken={setToken}
    />),
    store: (<StoreContainer
      userId={userId}
      setUserId={setUserId}
      token={token}
      setToken={setToken}
    />),
  }

  return ready ? (
    <ThemeContext.Provider value={getTheme(uiTheme[env.VARIANT])}>
      {containers[env.VARIANT]}
    </ThemeContext.Provider>
  ) : null;
};

const asyncInit = async setUserId => {
  await Promise.all([
    Font.loadAsync({
      'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-light': require('./assets/fonts/Roboto-Light.ttf')
    }),
    loadUserInfo(setUserId)
  ]);
  return Promise.resolve();
};

const loadUserInfo = async setUserId => {
  return new Promise(async (resolve, reject) => {
    // TODO: Check initial token

    const userId = await getItem('userId');
    if (userId) {
      // Validate user id
      superagent
        .get(`${env.BASE_URL}/person/${userId}`)
        .then(res => {
          console.log(res);
          setUserId(userId);
          return resolve();
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
