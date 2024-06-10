import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function LocationScreen({ navigation }) {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
      <View style={styles.body}>
        <Image source={require('../assets/map.png')} style={styles.bodyImage} />
        <TouchableOpacity style={styles.pinLocation} onPress={() => setIsBoxVisible(true)}></TouchableOpacity>
        {isBoxVisible && (
          <View style={styles.LocationInformation}>
            <TouchableOpacity onPress={() => setIsBoxVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Image source={require('../assets/location-image.png')} style={styles.LocationInformationImage} />
            <Text style={styles.LocationInformationHeader}>Luxury Dealership</Text>
            <Text style={styles.LocationInformationText}>Open: 24/7</Text>
            <Text style={styles.LocationInformationText}>Location: Edisonrichroad 2, 2313 HD Spijkenisse</Text>
            <Text style={styles.LocationInformationText}>Number: 0181 293 232</Text>
          </View>
        )}
      </View>
      <View style={styles.footer}>
        <View style={styles.spaceFooter}>
          <TouchableOpacity onPress={() => navigation.navigate('index')}>
            <Text style={styles.footerText}>ENGLISH</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('index')}>
            <Image source={require('../assets/LU.png')} style={styles.footerImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('menu')}>
            <Image source={require('../assets/Menu.png')} style={styles.footerImage} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    height: 80,
    zIndex: 1,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bodyImage: {
    position: 'absolute',
    height: '130%',
    width: '100%',
    zIndex: 0,
  },
  pinLocation: {
    position: 'absolute',
    height: 19,
    width: 10,
    left: 177,
    top: 235,
  },
  LocationInformationImage: {
    height: '40%',
    width: '100%',
  },
  LocationInformation: {
    backgroundColor: 'black',
    position: 'absolute',
    borderRadius: 10,
    height: '40%',
    width: '60%',
    padding: 20,
    left: '20%',
    top: '30%',
    zIndex: 2,
  },
  closeButton: {
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 10,
    padding: 5,
    zIndex: 2,
    right: 10,
    top: 10,
  },
  closeButtonText: {
    fontWeight: 'bold',
    color: 'black',
  },
  LocationInformationHeader: {
    marginBottom: 10,
    color: 'white',
    marginTop: 10,
    fontSize: 20,
  },
  LocationInformationText: {
    color: 'white',
  },
  footer: {
    backgroundColor: 'rgba(217, 217, 217, 0.24)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginBottom: 10,
    width: '90%',
    height: 50,
  },
  spaceFooter: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    height: 50,
  },
  footerImage: {
    height: 20,
    width: 30,
  },
  footerText: {
    color: 'white',
  },
});