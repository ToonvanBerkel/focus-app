
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './back-end/store.js';
import { Provider } from 'react-redux';
import React from 'react';

import MenuScreen from './menu.jsx';
import CartScreen from './cart.jsx';
import HomeScreen from './index.jsx';
import ShopScreen from './shop.jsx'
import CarBrandsScreen from './carBrands.jsx';
import LamborghiniScreen from './lamborghini.jsx';
import RevueltoScreen from './revuelto.jsx';
import LocationScreen from './location.jsx';

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="menu" component={MenuScreen} />
        <Stack.Screen name="cart" component={CartScreen} />
        <Stack.Screen name="index" component={HomeScreen} />
        <Stack.Screen name="shop" component={ShopScreen} />
        <Stack.Screen name="carBrands" component={CarBrandsScreen} />
        <Stack.Screen name="lamborghini" component={LamborghiniScreen} />
        <Stack.Screen name="revuelto" component={RevueltoScreen} />
        <Stack.Screen name="location" component={LocationScreen} />
      </Stack.Navigator>
    </Provider>
  );
};

export default RootLayout;
