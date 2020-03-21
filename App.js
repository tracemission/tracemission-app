import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import MainContainer from './src/components/main/MainContainer';

const App = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    asyncInit().then(() => {
      setReady(true);
    });
  });

  return ready ? <MainContainer /> : null;
};

const asyncInit = async () => {
  await Promise.all([
    Font.loadAsync({
      'roboto-light': require('./assets/fonts/Roboto-Light.ttf')
    })
  ]);
  return Promise.resolve();
};

export default App;
