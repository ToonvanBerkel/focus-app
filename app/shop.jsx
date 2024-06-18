import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ShopScreen({ navigation }) {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
      <View style={styles.body}>
        <TouchableOpacity onPress={toggleBoxVisibility} style={styles.bodyChoiceImageOneBox}>
          <Image source={require('../assets/Transport.png')} style={styles.bodyChoiceImageOne} />
        </TouchableOpacity>
        {isBoxVisible && (
          <View style={styles.LocationInformation}>
            <TouchableOpacity onPress={() => navigation.navigate('carBrands')}>
              <Text style={styles.LocationInformationHeader}>Cars</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('motorcycleBrands')}>
              <Text style={styles.LocationInformationHeader}>Motorcycle</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('planeBrands')}>
              <Text style={styles.LocationInformationHeaderNo}>Planes</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('suits')} style={styles.bodyChoiceImageTwoBox}>
          <Image source={require('../assets/Suits.png')} style={styles.bodyChoiceImageTwo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('watches')} style={styles.bodyChoiceImageThreeBox}>
          <Image source={require('../assets/Watches.png')} style={styles.bodyChoiceImageThree} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('yachts')} style={styles.bodyChoiceImageFourBox}>
          <Image source={require('../assets/Yachts.png')} style={styles.bodyChoiceImageFour} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('mansions')} style={styles.bodyChoiceImageFiveBox}>
          <Image source={require('../assets/Mansions.png')} style={styles.bodyChoiceImageFive} />
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
    backgroundColor: '#0D0D0D',
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    height: 80,
    zIndex: 1,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bodyChoiceImageOneBox: {
    position: 'absolute',
    height: '17%',
    width: '80%',
    left: '-5%',
    top: '5%',
  },
  bodyChoiceImageTwoBox: {
    position: 'absolute',
    height: '17%',
    width: '80%',
    right: '-5%',
    top: '22.5%',
  },
  bodyChoiceImageOne: {
    height: '100%',
    width: '100%',
  },
  bodyChoiceImageTwo: {
    height: '100%',
    width: '100%',
  },
  bodyChoiceImageThreeBox: {
    position: 'absolute',
    height: '17%',
    width: '80%',
    left: '-5%',
    top: '40%',
  },
  bodyChoiceImageThree: {
    height: '100%',
    width: '100%',
  },
  bodyChoiceImageFourBox: {
    position: 'absolute',
    height: '17%',
    width: '80%',
    right: '-5%',
    top: '57.5%',
  },
  bodyChoiceImageFour: {
    height: '100%',
    width: '100%',
  },
  bodyChoiceImageFiveBox: {
    position: 'absolute',
    height: '17%',
    width: '80%',
    left: '-5%',
    top: '75%',
  },
  bodyChoiceImageFive: {
    height: '100%',
    width: '100%',
  },
  LocationInformation: {
    backgroundColor: 'black',
    position: 'absolute',
    width: '80%',
    left: '-5%',
    padding: 10,
    top: '22%',
    zIndex: 2,
  },
  closeButton: {
    backgroundColor: 'black',
    position: 'absolute',
    borderRadius: 10,
    padding: 5,
    height: 50,
    right: 10,
    width: 20,
    top: 10,
  },
  closeButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  LocationInformationImage: {
    resizeMode: 'cover',
    marginBottom: 10,
    width: '100%',
    height: 150,
  },
  LocationInformationHeader: {
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    width: '60%',
    left: '15%',
  },
  LocationInformationHeaderNo: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    left: '15%',
  },
  footer: {
    backgroundColor: 'rgba(217, 217, 217, 0.24)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: '5%',
    width: '90%',
    height: 50,
  },
  spaceFooter: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
  },
  footerImage: {
    height: 20,
    width: 30,
  },
  footerText: {
    color: 'white',
  },
});