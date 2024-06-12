import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function RevueltoScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
        <View style={styles.body}>
            <Image source={require('../assets/RevueltoBg.png')} style={styles.bodyImage } />
            <View style={styles.bodyTitle}>
              <Text style={styles.bodyText}>REVUELTO</Text>
              <Text style={styles.bodyTextSmaller}>FROM NOW ON</Text>
              <View style={styles.bodyDetail}>
                <Text style={styles.bodyTextSmall}>POWER (combined ICE+EE)</Text>
                <Text style={styles.bodyTextSmallSpace}>1015 CV</Text>
                <Text style={styles.bodyTextSmall}>MAX. SPEED</Text>
                <Text style={styles.bodyTextSmallSpace}>>350 km/h</Text>
                <Text style={styles.bodyTextSmall}>0-100 km/h</Text>
                <Text style={styles.bodyTextSmall}>2.5 s</Text>
              </View>
            </View>
            <Text style={styles.bodyTextNote}>To get a custom made Revuelto visit one of our locations.</Text>
        </View>
        <View style={styles.footerSecond}>
          <Text style={styles.footerPrice}>Price $6.000.000,-</Text>
          <TouchableOpacity onPress={() => navigation.navigate('cart')} style={styles.footerShoppingCart}>
              <Text style={styles.footerShoppingCartText}>Add to cart</Text>
              <Image source={require('../assets/ShoppingBasket.png')} style={styles.footerImageCart} />
          </TouchableOpacity>
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
  footerSecond: {
    position: 'absolute',
    bottom: 70,
    left: '5%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerPrice: {
    color: 'white',
    fontSize: 18,
    position: 'absolute',
    bottom: 0,
  },
  footerShoppingCart: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(217, 217, 217, 0.24)',
    padding: 10,
    position: 'absolute',
    right: 0,
    top: -35,
  },
  footerShoppingCartText: {
    color: 'white',
  },
  footerImageCart: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
    marginTop: 20,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    width: '80%',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bodyTextNote: {
    position: 'absolute',
    bottom: 100,
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    width: '90%',
    fontWeight: 'normal',
    marginBottom: 10,
  },
  bodyDetail: {
    marginTop: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyTitle: {
    position: 'absolute',
    top: 50,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyTextSmall: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'normal',
  },
  bodyTextSmallSpace: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'normal',
    marginBottom: 20,
  },
  bodyTextSmaller: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    width: '80%',
    fontWeight: 'normal',
    marginBottom: 10,
    borderColor: 'white',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingBottom: 15,
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
  },
  footerImage: {
    height: 20,
    width: 30,
  },
  footerText: {
    color: 'white',
  },
});