import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function FlatBlackFittedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
      <Text style={styles.bodyText}>Flat Black Fitted</Text>
      <Image source={require('../assets/FlatBlackFittedFull.png')} style={styles.fullSuit} />
      <View style={styles.btns}>
        <Text style={styles.btn}>S</Text>
        <Text style={styles.btn}>M</Text>
        <Text style={styles.btn}>L</Text>
        <Text style={styles.btn}>XL</Text>
      </View>
      <Text style={styles.note}>To get a custom made suit visit one of our locations.</Text>
      <ScrollView contentContainerStyle={styles.body}></ScrollView>
      <View style={styles.footerSecond}>
        <Text style={styles.footerPrice}>Price $600,-</Text>
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
  footerImageCart: {
    width: 20,
    height: 20,
    marginLeft: 10,
    zIndex: 2,
  },
  btns: {
    width: '70%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 220,
    flexDirection: 'row',
  },
  spaceFooter: {
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    zIndex: 2,
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
  btn: {
    color: '#ffffff',
    fontSize: 20,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 60,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  note: {
    color: '#ffffff',
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    bottom: 150,
  },
  fullSuit: {
    position: 'absolute',
    top: 150,
    height: '50%',
    width: '70%',
    alignSelf: 'center',
  },
  cardList: {
    marginTop: 210,
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '42%',
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 130,
  },
  cardText: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 10,
  },
  headerTextLine: {
    position: 'absolute',
    top: 155,
    alignSelf: 'center',
    width: '90%',
    height: '0.7%',
    zIndex: 2,
  },
  FilterDown: {
    position: 'absolute',
    top: 170,
    right: 156,
    width: 18,
    height: 18,
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
    position: 'absolute',
    top: 100,
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'normal',
    zIndex: 2,
  },
  bodyTextSecond: {
    position: 'absolute',
    top: 160,
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'normal',
    zIndex: 2,
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