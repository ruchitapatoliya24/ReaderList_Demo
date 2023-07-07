import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../containers/Home';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import { setTopLevelNavigation } from './navigationHelper';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={(ref) => setTopLevelNavigation(ref)}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'SignUp'} component={SignUp} />
        <Stack.Screen name={'Home'} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
