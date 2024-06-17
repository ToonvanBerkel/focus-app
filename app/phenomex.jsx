import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function PhenomExScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.sectionOne}>
          <Image source={require('../assets/PhenomEXBg.png')} style={styles.bodyImage} />
          <View style={styles.bodyTitle}>
            <Text style={styles.bodyText}>PHENOM 300EX</Text>
            <Text style={styles.bodyTextSmaller}>EXPERIENCE EXCELLENCE</Text>
            <View style={styles.bodyDetail}>
              <Text style={styles.bodyTextSmall}>WEIGHT</Text>
              <Text style={styles.bodyTextSmallSpace}>4875 KG</Text>
              <Text style={styles.bodyTextSmall}>MAX. SPEED</Text>
              <Text style={styles.bodyTextSmall}>752 km/h</Text>
            </View>
          </View>
          <Text style={styles.bodyTextNote}>To get a custom made Revuelto visit one of our locations.</Text>
        </View>
        <View style={styles.sectionTwo}>
          <Image source={require('../assets/PhenomEXVideo.png')} style={styles.productVideo} />
          <Text style={styles.bodyOverview}>Overview</Text>
          <Text style={styles.bodyOverviewText}>
            The Phenom 100EX isn't just a jet; it's an embodiment of comfort and innovation harmoniously entwined. The high-tech interior design represents the epitome of comfort, while its operational versatility ensures you're ready for any journey. With enhanced single-pilot-friendly avionics and pioneering safety features, whether you're a seasoned pilot or a passenger seeking the utmost comfort, the Phenom 100EX is the ultimate match for those who demand excellence.
          </Text>
          <Text style={styles.bodyOverviewText}>
            Fly away with the confidence that only a Phenom 100EX can offer you.
          </Text>
          <Image source={require('../assets/PhenomEXModel.png')} style={styles.productModel} />
          <Text style={styles.note}>To get a custom made Phenom visit one of our locations.</Text>
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
    height: '50%',
    marginBottom: 120,
    paddingTop: 100,
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
    position: 'absolute',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    paddingBottom: 200,
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
    marginTop: 50,
  },
  productModel: {
    width: '90%',
    height: 220,
    objectFit: 'contain',
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
    height: '150%',
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