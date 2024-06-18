import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function BarbaraCaliforniaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.sectionOne}>
          <Image source={require('../assets/BarbaraCaliforniaBg.png')} style={styles.bodyImage} />
          <View style={styles.bodyTitle}>
            <Text style={styles.bodyText}>Barbara California</Text>
            <Text style={styles.bodyTextSmaller}>2084 EAST VALLEY ROAD</Text>
          </View>
          <Text style={styles.bodyTextNote}> </Text>
        </View>
        <View style={styles.sectionTwo}>
          <Text style={styles.bodyOverview}>Overview</Text>
          <Text style={styles.bodyOverviewText}>
            This spectacular Mediterranean style villa with interior contemporary elements will transport you to another time and place. Upon entering the foyer, you are greeted by ascending ceilings, and beautiful Palladian windows highlighting unobstructed mountain views. A floor to ceiling fireplace in the living room is a great statement piece and compliments the grand staircase. This home not only boasts a pool/hot tub, but tucked away behind the guest house is yet another spa area including an outdoor shower, cold plunge, and soaking tub.
          </Text>
          <Text style={styles.bodyOverviewText}>
            The primary bath features dual closets, a grand freestanding tub, and marble floors and countertops.          
          </Text>
          <Text style={styles.bodyOverviewText}>
            The technology incorporated in the 2011 construction of this home gives you the best of both worlds. This estate includes state of the art smart home technology, upgraded security systems, and solar technology. This truly exceptional estate successfully captures the true essence of the Montecito lifestyle.
          </Text>
          <View style={styles.Overview} >
            <Image source={require('../assets/Enlarge.png')} style={styles.OverviewIcon} />
            <Image source={require('../assets/ArrowLeft.png')} style={styles.viewLeft} />
            <Image source={require('../assets/ArrowRight.png')} style={styles.viewRight} />
            <Image source={require('../assets/ImageOverviewBarbaraOne.png')} style={styles.OverviewImage} />
            <View style={styles.OverviewList} >
                <Image source={require('../assets/FadeRight.png')} style={styles.FadeRight} />
                <Image source={require('../assets/ImageOverviewBarbaraTwo.png')} style={styles.OverviewImageSmall} />
                <Image source={require('../assets/ImageOverviewBarbaraThree.png')} style={styles.OverviewImageSmall} />
                <Image source={require('../assets/ImageOverviewBarbaraFour.png')} style={styles.OverviewImageSmall} />
                <Image source={require('../assets/ImageOverviewBarbaraFive.png')} style={styles.OverviewImageSmall} />
                <Image source={require('../assets/ImageOverviewBarbaraSix.png')} style={styles.OverviewImageSmall} />
                <Image source={require('../assets/ImageOverviewBarbaraSeven.png')} style={styles.OverviewImageSmall} />
                <Image source={require('../assets/ImageOverviewBarbaraEight.png')} style={styles.OverviewImageSmall} />
                <Image source={require('../assets/ImageOverviewBarbaraNine.png')} style={styles.OverviewImageSmall} />
                <Image source={require('../assets/ImageOverviewBarbaraTen.png')} style={styles.OverviewImageSmall} />
                <Image source={require('../assets/ImageOverviewBarbaraEleven.png')} style={styles.OverviewImageSmall} />
            </View>
          </View>
        </View>
      </ScrollView>
      <Image source={require('../assets/BottomFade.png')} style={styles.BottomFade} />
      <View style={styles.footerSecond}>
        <Text style={styles.footerPrice}>Price $9.000.000,-</Text>
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
  FadeRight: {
    position: 'absolute',
    right: -110,
    top: 0,
    height: 35,
    width: 80,
    zIndex: 1,
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
  Overview: {
    width: '80%',
  },
  OverviewList: {
    marginTop: 10,
    flexDirection: 'row',
    height: 35,
    width: '80%',
  },
  OverviewImageSmall: {
    width: 35,
    height: 35,
    marginRight: 5,
  },
  viewLeft: {
    position: 'absolute',
    width: 20,
    height: 20,
    zIndex: 1,
    top: 150,
    left: 10,
  },
  viewRight: {
    position: 'absolute',
    width: 20,
    height: 20,
    zIndex: 1,
    top: 150,
    right: 10,
  },
  OverviewIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 10,
    top: 60,
    zIndex: 1,
  },
  OverviewImage: {
    width: 350,
    height: 220,
    marginTop: 50,
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
    fontSize: 45,
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