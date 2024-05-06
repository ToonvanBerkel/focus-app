import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Privacy = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.spaceHeader}>
                <Text style={styles.headerText}>FOCUS</Text>
                <Text style={styles.headerTextSmall}>Premium</Text>
            </View>
        </View>
        <View style={styles.bodySettings}>
          <View style={styles.listSettings}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('settings')}>
                    <View style={styles.row}>
                        <Image source={require('../assets/return.png')} style={styles.returnImage}></Image>
                        <Text style={styles.listSettingsText}>Privacy</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('eula')}>
                  <Text style={styles.listSettingsText}>EULA</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.smallText}>
            <Text>Log out</Text>
            <Text>Deactivate</Text>
          </View>
          <StatusBar style="auto" />
        </View>
        <View style={styles.footer}>
            <View style={styles.spaceFooter}>
                <TouchableOpacity onPress={() => navigation.navigate('index')}>
                    <Image source={require('../assets/footer-image-home.png')} style={styles.footerImage} />
                </TouchableOpacity>
                <Image source={require('../assets/footer-image-calendar.png')} style={styles.footerImage} />
                <Image source={require('../assets/footer-image-barbell.png')} style={styles.footerImage} />
                <TouchableOpacity onPress={() => navigation.navigate('settings')}>
                <Image source={require('../assets/footer-image-settings.png')} style={styles.footerImage} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Privacy

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
  returnImage: {
    width: 30,
    height: 30,
    marginRight: 10,
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