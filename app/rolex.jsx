import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function RolexScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.sectionOne}>
          <Image source={require('../assets/RolexBg.png')} style={styles.bodyImage} />
          <View style={styles.bodyTitle}>
            <Text style={styles.bodyText}>ROLEX</Text>
            <Text style={styles.bodyTextSmaller}>OYSTER  PERPETUAL SUBMARINER</Text>
          </View>
          <Text style={styles.bodyTextNote}>To get a custom made Rolex visit one of our locations.</Text>
        </View>
        <View style={styles.sectionTwo}>
          <Image source={require('../assets/RolexVideo.png')} style={styles.productVideo} />
          <Text style={styles.bodyOverview}>Beneath the surface</Text>
          <Text style={styles.bodyOverviewText}>
            Launched in 1953, the Rolex Submariner is the first divers’ wristwatch to be waterproof to a depth of 100 metres (330 feet) – now 300 metres (1,000 feet). Its major features, such as the graduated rotatable bezel, the luminescent display, the large hands and hour markers, have been a driving force in the creation of the long line of Rolex divers’ watches which followed.
          </Text>
          <Text style={styles.bodyOverviewText}>
            The Submariner is an iconic timepiece whose renown now extends beyond the professional world it was first designed for. The Submariner, the ultimate standard.
          </Text>
          <Text style={styles.bodyOverview}>A true divers’ watch by design</Text>
          <Text style={styles.bodyOverviewText}>
            As an underwater survival tool, this watch’s design has been entirely dictated by the practical needs of divers. Since 1953, the Submariner has evolved technically and aesthetically as it has been endowed with features to improve overall functionality. The first watch was a pioneer and its subsequent versions have continued to set the benchmark for divers’ watches.
          </Text>
        </View>
      </ScrollView>
      <Image source={require('../assets/BottomFade.png')} style={styles.BottomFade} />
      <View style={styles.footerSecond}>
        <Text style={styles.footerPrice}>Price $60.000,-</Text>
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
    height: 830,
    overflow: 'hidden',
    marginBottom: 50,
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
    marginTop: 450,
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
    fontSize: 24,
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
    height: 860,
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