import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import superagent from 'superagent';
import MainContainer from './src/components/main/MainContainer';
import { getItem } from './src/util/StorageService';
import { ThemeContext, getTheme } from 'react-native-material-ui';
import uiTheme from './src/util/mainStyle';
import * as i18n from './src/util/i18n';

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
      <MainContainer
        userData={userData}
        setUserData={setUserData}
        token={token}
        setToken={setToken}
      />
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
        .get(`${process.env.BASE_URL}/person/${userId}`)
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
