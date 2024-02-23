/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useLayoutEffect} from 'react';
import {createServer} from 'miragejs';
import Routers from './src/core/router/Routers';
import {StackActions} from '@react-navigation/native';
import {UserProvider} from './src/providers/users';
import {PredefinedSitesProvider} from './src/providers/predefinedSites';
import {NotificationProvider} from './src/providers/notifications';

// @ts-ignore
if (window.server) {
  // @ts-ignore
  server.shutdown();
}
// @ts-ignore
window.server = createServer({
  routes() {
    this.post('/auth/login', () => {
      return {email: 'test@gmail.com', id: 1, userRole: 'user', name: 'Peter'};
    });
    this.get('/give-some-data/websites', () => {
      return [
        {name: 'Nike US', url: 'https://www.nike.com'},
        {name: 'Adidas US', url: 'https://www.adidas.com/us'},
        {name: 'Puma US', url: 'https://us.puma.com/us/en'},
      ];
    });
  },
});

function App(): React.JSX.Element {
  useLayoutEffect(() => {
    StackActions.push('Login');
  });

  return (
    <NotificationProvider>
      <UserProvider>
        <PredefinedSitesProvider>
          <Routers />
        </PredefinedSitesProvider>
      </UserProvider>
    </NotificationProvider>
  );
}

export default App;
