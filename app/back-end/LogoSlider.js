import React, { useEffect, useRef } from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';

const images = [
  require('../../assets/Lamborghini.png'),
  require('../../assets/Bugatti.png'),
  require('../../assets/AstonMartin.png'),
  require('../../assets/Maserati.png'),
  require('../../assets/RollsRoyce.png'),
  require('../../assets/McLaren.png'),
  require('../../assets/Porsche.png'),
  require('../../assets/Rolex.png'),
  require('../../assets/Boeing.png'),
  require('../../assets/Ducati.png'),
  require('../../assets/Kawasaki.png'),
  require('../../assets/Ferrari.png')
];

const LogoSlider = () => {
  const scrollViewRef = useRef(null);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      scrollViewRef.current.scrollTo({ x: currentIndex * 150, animated: true });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.sliderContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.slider}
        contentContainerStyle={styles.sliderContent}
      >
        {images.map((image, index) => (
          <Image source={image} style={styles.companyLogo} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    position: 'absolute',
    top: 300,
    width: '100%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '100%',
  },
  sliderContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyLogo: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
});

export default LogoSlider;