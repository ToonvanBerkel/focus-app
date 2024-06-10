
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarBrandsScreen from './carBrands.jsx';
import LocationScreen from './location.jsx';
import store from './back-end/store.js';
import { Provider } from 'react-redux';
import HomeScreen from './index.jsx';
import MenuScreen from './menu.jsx';
import ShopScreen from './shop.jsx'
import CartScreen from './cart.jsx';
import React from 'react';

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="menu"
          component={MenuScreen}
        />
        <Stack.Screen
          name="cart"
          component={CartScreen}
        />
        <Stack.Screen
          name="index"
          component={HomeScreen}
        />
        <Stack.Screen
          name="shop"
          component={ShopScreen}
        />
        <Stack.Screen
          name="carBrands"
          component={CarBrandsScreen}
        />
        <Stack.Screen
          name="location"
          component={LocationScreen}
        />
      </Stack.Navigator>
    </Provider>
  );
};

export default RootLayout;
