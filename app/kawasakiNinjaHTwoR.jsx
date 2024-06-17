import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function KawasakiNinjaHTwoRScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.sectionOne}>
          <Image source={require('../assets/KawasakiNinjaH2RBg.png')} style={styles.bodyImage} />
          <View style={styles.bodyTitle}>
            <Text style={styles.bodyText}>NINJA H2R </Text>
            <Text style={styles.bodyTextSmaller}>BUILT BEYOND BELIEF</Text>
            <View style={styles.bodyDetail}>
              <Text style={styles.bodyTextSmall}>CYLINDER CAPACITY</Text>
              <Text style={styles.bodyTextSmallSpace}>998 cm³</Text>
              <Text style={styles.bodyTextSmall}>MAX. POWER</Text>
              <Text style={styles.bodyTextSmall}>310 PK</Text>
            </View>
          </View>
          <Text style={styles.bodyTextNote}>To get a custom made Ninja H2R visit one of our locations.</Text>
        </View>
        <View style={styles.sectionTwo}>
          <Image source={require('../assets/KawasakiNinjaH2RVideo.png')} style={styles.productVideo} />
          <Text style={styles.bodyOverview}>Overview</Text>
          <Text style={styles.bodyOverviewText}>
            Created to be the ultimate in motorcycle performance: The Ninja H2R is a fantastic motorcycle masterpiece. Created using all available technical divisions within the Kawasaki group. The Ninja H2R has a revolutionary engine block with crushing performance, the highest quality components for it chassis and a whole range of high-quality details – all together this is a legend on two wheels.
          </Text>
          <Text style={styles.bodyOverviewText}>
            This engine is not permitted for use on public roads.
          </Text>
          <Image source={require('../assets/KawasakiNinjaH2RModel.png')} style={styles.productModel} />
          <Text style={styles.note}>If you want more information visit the official site.</Text>
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
  productModel: {
    width: '90%',
    height: 220,
    objectFit: 'contain',
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
    height: '100%',
    objectFit: 'cover',
    top: 200,
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