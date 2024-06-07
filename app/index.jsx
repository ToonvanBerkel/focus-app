import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import LogoSlider from './back-end/LogoSlider'; // Ensure this path is correct

const { height: screenHeight } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo_navbar.png')} style={styles.headerImage} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.section]}>
          <Image source={require('../assets/hm_bg.png')} style={styles.bodyImage} />
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              “YOUR BIGGEST <Text style={styles.redText}>RISK</Text> IS NOT TAKING A <Text style={styles.redText}>RISK</Text> AT ALL”
            </Text>
            <Text style={styles.bodyTextSmall}>ENTER SHOP</Text>
          </View>
        </View>
        <View style={[styles.section]}>
          <Image source={require('../assets/hm_bg_b.png')} style={styles.bodyImageRest} />
          <Text style={styles.sectionHeader}>What we offer</Text>
          <View style={styles.sectionlist}>
            <Text style={styles.sectionlistItem}>Transportation</Text>
            <Text style={styles.sectionlistItem}>Suits</Text>
            <Text style={styles.sectionlistItem}>Watches</Text>
            <Text style={styles.sectionlistItem}>Yachts</Text>
            <Text style={styles.sectionlistItem}>Mansions</Text>
          </View>
        </View>
        <View style={[styles.section]}>
          <Text style={styles.sectionTitle}>About us</Text>
          <View style={styles.sectionTexterea}>
            <Text style={styles.sectionQoute}>
              Luxury is a company started in 2024, by a student called ‘Toon van Berkel’. His reasoning was that ‘why be rich if you look <Text style={styles.redText}>broke</Text>’. So he decided to gather all the luxury assets into one huge company.
            </Text>
            <Text style={styles.sectionTextSmall}>Read more...</Text>
          </View>
          <LogoSlider />
          <View style={styles.sectionSocial}>
            <Image source={require('../assets/Facebook.png')} style={styles.socailLogo} />
            <Image source={require('../assets/YouTube.png')} style={styles.socailLogo} />
            <Image source={require('../assets/TwitterX.png')} style={styles.socailLogo} />
          </View>
          <View style={styles.copyright}>
            <Text style={styles.copyrightText}>copyrighted © 2024 luxury</Text>
            <Text style={styles.copyrightText}>All rights reserved. VAT no. IT 00591401208</Text>
            <Text style={styles.disclaimer}>
              Please remember this website is made for educational purposes only, if you want the real prices and real products you have to buy them on the website of the real company.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.spaceFooter}>
          <Text style={styles.footerText}>ENGLISH</Text>
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
  copyrightText: {
    color: 'white',
    textAlign: 'center',
  },
  disclaimer: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  copyright: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 150,
    width: '80%',
    alignSelf: 'center', // Center the text in the container
  },
  socailLogo: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
  },
  sectionSocial: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 300,
    alignSelf: 'center',
  },
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
    position: 'absolute',
    top: 0,
    marginTop: 20,
  },
  headerImage: {
    height: 80,
    width: '100%',
    resizeMode: 'contain',
  },
  scrollContainer: {
    paddingTop: 80,
  },
  section: {
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
  },
  sectionHeader: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    top: 90,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionQoute: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    paddingLeft: 50,
    paddingRight: 50,
  },
  sectionTexterea: {
    position: 'absolute',
    top: 150,
  },
  bodyText: {
    position: 'absolute',
    top: 300,
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    width: '80%',
    fontWeight: 'bold',
  },
  sectionTextSmall: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
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
    top: -100,
    width: '100%',
    height: '110%',
    zIndex: 0,
  },
  bodyImageRest: {
    top: -45,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  redText: {
    color: 'red',
  },
  sectionText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  sectionlist: {
    flexDirection: 'column',
  },
  sectionlistItem: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
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
    position: 'absolute',
    bottom: 0,
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