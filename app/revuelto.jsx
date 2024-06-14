import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function RevueltoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.sectionOne}>
          <Image source={require('../assets/RevueltoBg.png')} style={styles.bodyImage} />
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
        <View style={styles.sectionTwo}>
          <Image source={require('../assets/RevueltoVideo.png')} style={styles.productVideo} />
          <Text style={styles.bodyOverview}>Overview</Text>
          <Text style={styles.bodyOverviewText}>
            Just before the 60th anniversary of the marque, Lamborghini unveiled Revuelto, the first HPEV (High Performance Electrified Vehicle) hybrid super sports car. With the Revuelto, Lamborghini has established a new benchmark in performance, on-board technology, and driving pleasure. The ultimate thrill provided by the Revuelto is reached thanks to a powertrain that delivers 1015 CV total, combining the power of a brand-new 12-cylinder internal combustion engine with three high-density electric motors and a groundbreaking transversal dual clutch e-gearbox. The power of hybridization is harnessed to take performance and driving emotions to an unprecedented level.
          </Text>
          <Text style={styles.bodyOverviewText}>
            Availability of the Lamborghini models may vary depending on the country. For more information, contact your local dealer.
          </Text>
          <Text style={styles.bodyOverview}>Specifications</Text>
          <View style={styles.specification}>
            <Text style={styles.specificationName}>DISPLACEMENT</Text>
            <Text style={styles.specificationProperty}>6498.5 cm³ (396.6 cu in)</Text>
          </View>
          <View style={styles.specification}>
            <Text style={styles.specificationName}>MAX POWER (COMBINED ICE+EE)</Text>
            <Text style={styles.specificationProperty}>1015 CV</Text>
          </View>
          <View style={styles.specification}>
            <Text style={styles.specificationName}>TOP SPEED</Text>
            <Text style={styles.specificationProperty}>>350 km/h</Text>
          </View>
          <View style={styles.specification}>
            <Text style={styles.specificationName}>ACCELERATION 0-100 KM/H</Text>
            <Text style={styles.specificationProperty}>2.5 s</Text>
          </View>
          <View style={styles.specification}>
            <Text style={styles.specificationName}>COMBINED CONSUMPTION</Text>
            <Text style={styles.specificationProperty}>11,86 l/100km (WLTP)</Text>
          </View>
          <View style={styles.specification}>
            <Text style={styles.specificationName}>COMBINED CO2 EMISSIONS</Text>
            <Text style={styles.specificationProperty}>276 g/km (WLTP)</Text>
          </View>
          <View style={styles.specification}>
            <Text style={styles.specificationName}>ACCELERATION 0-100 KM/H</Text>
            <Text style={styles.specificationProperty}>10,1 kWh/100 Km (WLTP)</Text>
          </View>
          <View style={styles.specificationNo}>
            <Text style={styles.specificationName}>CO2 EFFICIENCY CLASS COMBINED</Text>
            <Text style={styles.specificationProperty}>G (WLTP)</Text>
          </View>
          <Text style={styles.note}>If you want more information visit the official site.</Text>
        </View>
      </ScrollView>
      <Image source={require('../assets/BottomFade.png')} style={styles.BottomFade} />
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
  BottomFade: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    height: '20%',
  },
  footerSecond: {
    position: 'absolute',
    bottom: 70,
    left: '5%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  note: {
    fontWeight: 'normal',
    color: 'white',
    fontSize: 15,
    marginTop: 50,
  },
  bodyOverview: {
    color: 'white',
    fontSize: 40,
    textAlign: 'left',
    width: '80%',
    fontWeight: 'normal',
    marginVertical: 20,
  },
  specification: {
    width: '80%',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  specificationNo: {
    width: '80%',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  specificationName: {
    color: 'white',
  },
  specificationProperty: {
    color: 'white',
  },
  bodyOverviewText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'left',
    width: '80%',
    fontWeight: 'normal',
    marginBottom: 10,
  },
  footerPrice: {
    color: 'white',
    fontSize: 18,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
  footerShoppingCart: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(217, 217, 217, 0.24)',
    padding: 10,
    position: 'absolute',
    right: 0,
    top: -35,
    zIndex: 2,
  },
  footerShoppingCartText: {
    color: 'white',
    zIndex: 2,
  },
  sectionOne: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    marginBottom: 120,
  },
  sectionTwo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
  footerImageCart: {
    width: 20,
    height: 20,
    marginLeft: 10,
    zIndex: 2,
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    paddingBottom: 100,
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
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    width: '90%',
    fontWeight: 'normal',
    marginTop: 250,
  },
  productVideo: {
    width: '80%',
    height: 200,
  },
  bodyDetail: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyTitle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
  spaceFooter: {
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    zIndex: 2,
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
    zIndex: 2,
  },
  footerText: {
    color: '#ffffff',
    zIndex: 2,
  },
});