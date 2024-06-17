import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function YachtsScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
        <Text style={styles.headerText}>Yachts</Text>
        <Image source={require('../assets/Line.png')} style={styles.headerTextLine} />
        <Image source={require('../assets/ShoppingBasket.png')} style={styles.headerImageCart} />
        <Text style={styles.bodyTextSecond}>Filter</Text>
        <Image source={require('../assets/Arrow.png')} style={styles.FilterDown} />
        <View style={styles.body}>
            <Image source={require('../assets/TopFade.png')} style={styles.TopFade} />
            <Image source={require('../assets/BottomFade.png')} style={styles.BottomFade} />
            <View style={styles.carBrandsList}>
              <TouchableOpacity onPress={() => navigation.navigate('adastra')} style={styles.carBrandImageClick} >
                <Image source={require('../assets/Adastra.png')}  style={styles.carBrandImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.carBrandImageClick} >
                <Image source={require('../assets/YachtsTwo.png')} style={styles.carBrandImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.carBrandImageClick} >
                <Image source={require('../assets/YachtsThree.png')} style={styles.carBrandImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.carBrandImageClick} >
                <Image source={require('../assets/YachtsFour.png')} style={styles.carBrandImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.carBrandImageClick} >
                <Image source={require('../assets/YachtsFive.png')} style={styles.carBrandImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.carBrandImageClick} >
                <Image source={require('../assets/YachtsFive.png')} style={styles.carBrandImage} />
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
  headerImageCart: {
    zIndex: 2,
    position: 'absolute',
    top: 130,
    right: 30,
    width: 25,
    height: 25,
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
    top: 120,
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'normal',
    zIndex: 2,
  },
  bodyTextSecond: {
    position: 'absolute',
    top: 165,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'normal',
    zIndex: 2,
  },
  FilterDown: {
    position: 'absolute',
    top: 171,
    right: 175,
    width: 13,
    height: 13,
    zIndex: 2,
  },
  headerTextLine: {
    position: 'absolute',
    top: 155,
    alignSelf: 'center',
    width: '90%',
    height: '0.7%',
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
    top: 170,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carBrandImageClick: {
    width: '100%',
    height: '20%',
  },
  carBrandImage: {
    width: '100%',
    height: '100%',
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