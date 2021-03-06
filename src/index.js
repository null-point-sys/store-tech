import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';

import Navigation from './navigation';
import apolloClient from './config/apollo';
import store from './config/store';

function Index() {
  const [ isLoaded ] = useFonts({
    'Muli-Black': require('../assets/fonts/Muli-Black.ttf'),
    'Muli-Medium': require('../assets/fonts/Muli-Medium.ttf'),
    'Muli-ExtraLight': require('../assets/fonts/Muli-ExtraLight.ttf'),
  });

  if (!isLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Navigation />
      </ApolloProvider>
    </Provider>
  );
}

export default Index;
