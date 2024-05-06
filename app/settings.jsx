import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleActiveVisibility } from './back-end/actions';

const Settings = ({ navigation }) => {
  const isActiveVisible = useSelector(state => state.isActiveVisible);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.spaceHeader}>
                <Text style={styles.headerText}>FOCUS</Text>
                <Text style={styles.headerTextSmall}>Premium</Text>
            </View>
        </View>
        <View style={styles.bodySettings}>
          <View style={styles.profileTab}>
            <View>
              <Image source={require('../assets/profile.png')} style={styles.profileImage}></Image>
            </View>
            <View>
              <Text style={styles.normalText}>Username</Text>
              <Text style={styles.normalText}>Bio</Text>
              <Text style={styles.normalText}>lvl 0</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.listSettings}>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('account')}>
                <Text style={styles.listSettingsText}>Account</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('privacy')}>
                <Text style={styles.listSettingsText}>Privacy</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('notification')}>
                <Text style={styles.listSettingsText}>Notification</Text>
              </TouchableOpacity>
              <View style={styles.row}>
                <Text style={styles.listSettingsText}>Dark mode</Text>
                <Image source={require('../assets/dark-mode.png')} style={styles.darkModeImage}></Image>
              </View>
              <Text style={styles.listSettingsText}>Subscription</Text>
            </View>
          </View>
          <View style={styles.smallText}>
            <Text>Log out</Text>
            <TouchableOpacity onPress={() => dispatch(toggleActiveVisibility())}>
              {!isActiveVisible && (
                <Text>Deactivate</Text>
              )}
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
        <View style={styles.footer}>
            <View style={styles.spaceFooter}>
                <TouchableOpacity onPress={() => navigation.navigate('index')}>
                    <Image source={require('../assets/footer-image-home.png')} style={styles.footerImage} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('calender')}>
                    <Image source={require('../assets/footer-image-calendar.png')} style={styles.footerImage} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('training')}>
                    <Image source={require('../assets/footer-image-barbell.png')} style={styles.footerImage} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('settings')}>
                    <Image source={require('../assets/footer-image-settings.png')} style={styles.footerImage} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceHeader: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTextSmall: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodySettings: {
    flex: 1,
    alignItems: 'start',
    backgroundColor: 'white',
  },
  profileImage: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  profileTab: {
    width: '60%',
    display: 'flex',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {
    width: '80%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  listSettings: {
    display: 'flex',
    alignItems: 'start',
    overflow: 'show',
    marginLeft: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listSettingsText: {
    lineHeight: 60,
    fontSize: 24,
  },
  darkModeImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  smallText: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 20,
  },
  activeCircle: {
    display: 'flex',
    width: 120,
    height: 120,
    backgroundColor: 'lightgreen',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 24,
  },
  linkText: {
    color: 'blue',
  },
  spaceFooter: {
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  footer: {
    height: 50,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerImage: {
    height: 40,
    width: 40,
  }
});