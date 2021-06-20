/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Login, Splash} from './pages';
import { NavigationContainer } from '@react-navigation/native';
import { Ruter } from './Router';

const App = () => {
  return  (
  <>
  <NavigationContainer>
    <Ruter />
  </NavigationContainer>
  </>
  );
};

export default App;
