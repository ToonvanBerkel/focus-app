import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function AboutUsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.bodyText}>About us</Text>
        <Text style={styles.bodyTextSmall}>
          Luxury is a visionary company founded in 2024 by Toon van Berkel, a forward-thinking student driven by a singular, compelling idea: "Why be rich if you look broke?"
        </Text>
        <Text style={styles.bodyTextSmall}>
          Inspired by this philosophy, Toon set out to redefine the concept of luxury by consolidating the world's most opulent assets under one umbrella. From exquisite jewelry and haute couture fashion to high-end real estate and rare automobiles, Luxury aims to provide an unparalleled lifestyle experience for those who seek to not only possess wealth but to live and breathe it in every aspect of their lives.
        </Text>
        <Text style={styles.bodyTextSmall}>
          Toon's mission with Luxury is to curate and offer a seamless blend of exclusivity, sophistication, and extravagance, ensuring that the essence of being rich is as visible as it is substantial. With an eye for detail and a passion for the finer things in life, Toon has meticulously assembled a team of experts and connoisseurs dedicated to sourcing the best of the best, making Luxury not just a company, but a lifestyle statement.
        </Text>
        <Text style={styles.bodyTextSmallUp}>
          Luxury stands as a testament to the belief that true wealth is meant to be showcased and celebrated. By bringing together the most coveted luxury items from around the globe, Toon van Berkel's Luxury transforms the mundane into the extraordinary, offering clients not just products, but experiences that resonate with the epitome of elegance and grandeur.
        </Text>
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
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
    marginTop: 20,
  },
  body: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%',
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
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    width: '110%',
    fontWeight: 'normal',
    marginTop: 15,
  },
  bodyTextSmallUp: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    width: '110%',
    fontWeight: 'normal',
    marginTop: 15,
    marginBottom: 100,
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