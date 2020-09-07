import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';

import * as Font from 'expo-font';

import Navigation from './Navigation';

const App = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Promise.all([
      Font.loadAsync({
        'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
        'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
        'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
        'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf')
      })
    ]).then(() => {
      setReady(true);
    });
  }, []);

  return (
    ready && (
      <Navigation />
    )
  );
};

export default App;