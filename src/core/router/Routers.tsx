import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {Login} from '../../screens/Login';
import {MainScreen} from '../../screens/Main';
import {useUser} from '../../providers/users';
import {TUserRole} from '../../providers/users/index';

import {IRoute} from './types';

const Stack = createNativeStackNavigator();

const publicRoutes: IRoute[] = [{component: Login, name: 'login'}];

const userRouters: IRoute[] = [{component: MainScreen, name: 'mainScreen'}];

const RouterMapper: Record<TUserRole, IRoute[]> = {
  public: publicRoutes,
  user: userRouters,
};

const Routers = () => {
  const {userRole} = useUser();
  const routers = RouterMapper[userRole];

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routers.map((route, index) => (
          <Stack.Screen
            key={index}
            component={route.component}
            name={route.name}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
