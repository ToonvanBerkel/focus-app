import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function SuitsScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.backgroundFade} ></View>
        <Image source={require('../assets/TopFade.png')} style={styles.TopFade} />
        <Image source={require('../assets/BottomFade.png')} style={styles.BottomFade} />
      <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
      <Text style={styles.bodyText}>Suits</Text>
      <Image source={require('../assets/ShoppingBasket.png')} style={styles.headerImageCart} />
      <Image source={require('../assets/Line.png')} style={styles.headerTextLine} />
      <Text style={styles.bodyTextSecond}>Filter</Text>
      <Image source={require('../assets/Arrow.png')} style={styles.FilterDown} />
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.cardList}>
            <TouchableOpacity onPress={() => navigation.navigate('flatblackfitted')}  style={styles.card}>
                <Image source={require('../assets/FlatBlackFitted.png')} style={styles.cardImage} />
                <Text style={styles.cardText}>Flat Black Fitted</Text>
            </TouchableOpacity>
            <View style={styles.card}>
              <Image source={require('../assets/MattBlackFitted.png')} style={styles.cardImage} />
              <Text style={styles.cardText}>Matt Black Fitted</Text>
            </View>
            <View style={styles.card}>
              <Image source={require('../assets/BlackWhitePatern.png')} style={styles.cardImage} />
              <Text style={styles.cardText}>Black - White patern</Text>
            </View>
            <View style={styles.card}>
              <Image source={require('../assets/MattBlackFittedPatern.png')} style={styles.cardImage} />
              <Text style={styles.cardText}>Matt Black Fitted Patern</Text>
            </View>
            <View style={styles.card}>
              <Image source={require('../assets/WhitePantherPrint.png')} style={styles.cardImage} />
              <Text style={styles.cardText}>White Panther Print</Text>
            </View>
            <View style={styles.card}>
              <Image source={require('../assets/MattBlackRose.png')} style={styles.cardImage} />
              <Text style={styles.cardText}>Matt Black Rose</Text>
            </View>
            <View style={styles.card}>
              <Image source={require('../assets/BlackButterflyPatern.png')} style={styles.cardImage} />
              <Text style={styles.cardText}>Black Butterfly Patern</Text>
            </View>
            <View style={styles.card}>
              <Image source={require('../assets/WhiteBlosemPatern.png')} style={styles.cardImage} />
              <Text style={styles.cardText}>White Blosem Patern</Text>
            </View>
        </View>
      </ScrollView>
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
  backgroundFade: {
    position: 'absolute',
    backgroundColor: '#0D0D0D',
    top: 0,
    width: '100%',
    height: '12%',
    zIndex: 1,
  },
  headerImageCart: {
    zIndex: 2,
    position: 'absolute',
    top: 130,
    right: 30,
    width: 25,
    height: 25,
  },
  TopFade: {
    position: 'absolute',
    top: 100,
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
    top: 171,
    right: 175,
    width: 13,
    height: 13,
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