import React from 'react';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './index.jsx';
import MenuScreen from './menu.jsx';
import store from './back-end/store.js';

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          component={HomeScreen}
        />
        <Stack.Screen
          name="menu"
          component={MenuScreen}
        />
      </Stack.Navigator>
    </Provider>
  );
};

export default RootLayout;
