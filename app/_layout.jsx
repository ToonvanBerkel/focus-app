
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
import MotorcycleBrandsScreen from './motorcycleBrands.jsx'
import KawasakiScreen from './kawasaki.jsx';
import KawasakiHyperSportScreen from './kawasakiHyperSport.jsx';
import KawasakiNinjaHTwoRScreen from './kawasakiNinjaHTwoR.jsx'
import PlaneBrandsScreen from './planeBrands.jsx'
import EmbraerScreen from './embraer.jsx';
import PhenomExScreen from './phenomex.jsx';
import SuitsScreen from './suits.jsx';
import FlatBlackFittedScreen from './flatblackfitted.jsx';
import WatchesScreen from './watches.jsx';
import RolexScreen from './rolex.jsx';
import YachtsScreen from './yachts.jsx';
import AdastraScreen from './adastra.jsx';
import LocationScreen from './location.jsx';
import ContactScreen from './contact.jsx';
import AboutUsScreen from './aboutus.jsx';

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
        <Stack.Screen name="motorcycleBrands" component={MotorcycleBrandsScreen} />
        <Stack.Screen name="kawasaki" component={KawasakiScreen} />
        <Stack.Screen name="kawasakiHyperSport" component={KawasakiHyperSportScreen} />
        <Stack.Screen name="kawasakiNinjaHTwoR" component={KawasakiNinjaHTwoRScreen} />
        <Stack.Screen name="planeBrands" component={PlaneBrandsScreen} />
        <Stack.Screen name="embraer" component={EmbraerScreen} />
        <Stack.Screen name="phenomex" component={PhenomExScreen} />
        <Stack.Screen name="suits" component={SuitsScreen} />
        <Stack.Screen name="flatblackfitted" component={FlatBlackFittedScreen} />
        <Stack.Screen name="watches" component={WatchesScreen} />
        <Stack.Screen name="rolex" component={RolexScreen} />
        <Stack.Screen name="yachts" component={YachtsScreen} />
        <Stack.Screen name="adastra" component={AdastraScreen} />
        <Stack.Screen name="location" component={LocationScreen} />
        <Stack.Screen name="contact" component={ContactScreen} />
        <Stack.Screen name="aboutus" component={AboutUsScreen} />
      </Stack.Navigator>
    </Provider>
  );
};

export default RootLayout;
