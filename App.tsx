/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppStack from './src/navigation/AppStack';
import { store } from './src/redux/store';
import './src/services/restServices';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppStack />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
