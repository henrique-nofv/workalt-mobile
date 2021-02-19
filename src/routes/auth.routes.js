import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
