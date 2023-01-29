import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import AppNavigation from './src/components/AppNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
      <StatusBar style="auto" />
    </Provider>
  );
}
