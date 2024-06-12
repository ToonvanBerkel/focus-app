import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
      <View style={styles.body}>
        
        <View style={styles.cart}>
          <View style={styles.cartItem}>
            <Image source={require('../assets/RolexCartExample.png')} style={styles.cartItemImage} />
            <View style={styles.cartInformation}>
              <Text style={styles.cartItemTitle}>Rolex</Text>
              <Text style={styles.cartItemProperty}>* silver</Text>
            </View>
            <Text style={styles.cartItemPrice}>$10.000,-</Text>
          </View>
          <View style={styles.cartItemEndPrice}>
            <Text style={styles.cartItemAddition}>+</Text>
            <Text style={styles.cartItemFinalPrice}>$10.000,-</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('shop')}>
          <Text style={styles.bodyButtons}>Continue shopping</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('index')}>
          <Text style={styles.bodyButtons}>Checkout</Text>
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
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
    marginTop: 20,
  },
  cart: {
    width: '90%',
    position: 'absolute',
    top: 80,
  },
  cartItemAddition: {
    color: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderBottomWidth: 1,
    width: '100%',
    textAlign: 'right',  
  },
  cartItemFinalPrice: {
    color: '#ffffff',
  },
  cartItemEndPrice: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cartItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  cartItemImage: {
    width: 150,
    height: 150,
  },
  cartItemPrice: {
    paddingVertical: 10,
    width: 80,
    textAlign: 'right',
    color: '#ffffff',
  },
  cartInformation: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 140,
    color: '#ffffff',
  },
  cartItemTitle: {
    color: '#ffffff',
    fontSize: 20,
  },
  cartItemProperty: {
    color: '#ffffff',
    paddingLeft: 10,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyButtons: {
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#547782',
    width: 200,
    textAlign: 'center',
    marginTop: 20,
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
  },
  footerImage: {
    height: 20,
    width: 30,
  },
  footerText: {
    color: 'white',
  },
});