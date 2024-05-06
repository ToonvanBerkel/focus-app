import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { toggleActiveVisibility } from './back-end/actions';

export default function HomeScreen({ navigation }) {
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
        <View style={styles.body}>
          <TouchableOpacity onPress={() => dispatch(toggleActiveVisibility())}>
          {isActiveVisible && (
            <View style={styles.activeCircle}>
              <Text style={styles.boldText}>Active</Text>
            </View>
          )}
          </TouchableOpacity>
          {!isActiveVisible && (
            <View style={styles.homeList}>
              <View style={styles.row}>
                <Text style={styles.listSettingsText}>Times blocked: </Text>
                <Text style={styles.listSettingsText}>0</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.listSettingsText}>Time active: </Text>
                <Text style={styles.listSettingsText}>0</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.listSettingsText}>Upcoming: </Text>
                <Text style={styles.listSettingsText}>---</Text>
              </View>
            </View>
          )}
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
  );
}

function hideBtn() {
  let hide = Id('hide');

  hide.style.visibility = 'none'
}

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
    backgroundColor: 'white',
  },
  homeList: {
    display: 'flex',
    alignItems: 'start',
    overflow: 'show',
    marginTop: 40,
    marginLeft: 100,
    height: '100%',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontWeight: 'bold',
  },
  listSettingsText: {
    lineHeight: 60,
    fontSize: 24,
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