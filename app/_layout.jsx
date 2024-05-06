import React from 'react';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './index.jsx';
import CalenderScreen from './calender.jsx';
import TrainingScreen from './training.jsx';
import SettingsScreen from './settings.jsx';
import AccountScreen from './account.jsx';
import PrivacyScreen from './privacy.jsx';
import NotificationScreen from './notification.jsx';
import EulaScreen from './eula.jsx';
import store from './back-end/store.js';

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={HomeScreen}
          options={{ title: 'This is the homepage' }}
        />
        <Stack.Screen
          name="calender"
          component={CalenderScreen}
          options={{ title: 'This is the calender page' }}
        />
        <Stack.Screen
          name="training"
          component={TrainingScreen}
          options={{ title: 'This is the training page' }}
        />
        <Stack.Screen
          name="settings"
          component={SettingsScreen}
          options={{ title: "This is the settings page" }}
        />
        <Stack.Screen
          name="account"
          component={AccountScreen}
          options={{ title: "This is the account page" }}
        />
        <Stack.Screen
          name="privacy"
          component={PrivacyScreen}
          options={{ title: "This is the privacy page" }}
        />
        <Stack.Screen
          name="eula"
          component={EulaScreen}
          options={{ title: "This is the eula page" }}
        />
        <Stack.Screen
          name="notification"
          component={NotificationScreen}
          options={{ title: "This is the notification page" }}
        />
      </Stack.Navigator>
    </Provider>
  );
};

export default RootLayout;
