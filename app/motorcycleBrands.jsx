import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function MotorcycleBrands({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
        <View style={styles.body}>
            <Text style={styles.headerText}>Brands</Text>
            <Image source={require('../assets/Line.png')} style={styles.headerTextLine} />
            <View style={styles.carBrandsList}>
              <TouchableOpacity onPress={() => navigation.navigate('kawasaki')} style={styles.carBrandImageClick} >
                <Image source={require('../assets/KawasakiBanner.png')}  style={styles.carBrandImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.carBrandImageClick} >
                <Image source={require('../assets/DucatiBanner.png')} style={styles.carBrandImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.carBrandImageClick} >
                <Image source={require('../assets/BmwBanner.png')} style={styles.carBrandImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.carBrandImageClick} >
                <Image source={require('../assets/HondaBanner.png')} style={styles.carBrandImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.carBrandImageClick} >
                <Image source={require('../assets/YamahaBanner.png')} style={styles.carBrandImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.carBrandImageClick} >
                <Image source={require('../assets/KtmBanner.png')} style={styles.carBrandImage} />
              </TouchableOpacity>
            </View>
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
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  TopFade: {
    position: 'absolute',
    top: -100,
    zIndex: 1,
    width: '100%',
    height: '20%',
  },
  BottomFade: {
    position: 'absolute',
    bottom: -70,
    zIndex: 1,
    width: '100%',
    height: '20%',
  },
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 2,
    marginTop: 20,
  },
  headerText: {
    position: 'absolute',
    top: 0,
    width: '100%',
    textAlign: 'center',
    color: 'white',
    zIndex: 2, 
    fontSize: 40,
  },
  headerTextLine: {
    position: 'absolute',
    top: 50,
    width: '70%',
    height: '0.65%',
    zIndex: 2, 
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carBrandsList: {
    flex: 1,
    position: 'absolute',
    top: 140,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carBrandImageClick: {
    width: '100%',
    height: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carBrandImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
  },
  bodyText: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    width: '80%',
    fontWeight: 'bold',
    marginTop: 40,  
  },
  bodyTextSmall: {
    position: 'absolute',
    top: 425,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    width: '80%',
    fontWeight: 'bold',
  },
  bodyImage: {
    position: 'absolute',
    width: '100%',
    height: '130%',
    zIndex: 0,
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
  redText: {
    color: 'red',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeCircle: {
    display: 'flex',
    width: 120,
    height: 120,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
    Color: 'white',
  },
  normalText: {
    fontSize: 24,
    fontWeight: 'bold',
    Color: 'white',
  },
  listSettingsText: {
    lineHeight: 60,
    fontSize: 24,
    Color: 'white',
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(217, 217, 217, 0.24)',
    marginBottom: 10,
    width: '90%',
    marginLeft: '5%',
    zIndex: 2,
  },
  footerImage: {
    height: 20,
    width: 30,
  },
  footerText: {
    color: 'white',
  },
});