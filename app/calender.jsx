import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Calendar = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const calendarData = [
    ['1 May', '2 May', '3 May', '4 May', '5 May', '6 May', '7 May'],
    ['8 May', '9 May', '10 May', '11 May', '12 May', '13 May', '14 May'],
    ['15 May', '16 May', '17 May', '18 May', '19 May', '20 May', '21 May'],
    ['22 May', '23 May', '24 May', '25 May', '26 May', '27 May', '28 May'],
    ['29 May', '30 May', '31 May', '1 Jun', '2 Jun', '3 Jun', '4 Jun'],
    ['5 Jun', '6 Jun', '7 Jun', '8 Jun', '9 Jun', '10 Jun', '11 Jun'],
  ];

  const handleCalendarItemClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.spaceHeader}>
          <Text style={styles.headerText}>FOCUS</Text>
          <Text style={styles.headerTextSmall}>Premium</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.calendar}>
          {calendarData.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.calendarRow}>
              {row.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.calendarItem,
                    item === selectedDate ? styles.selectedItem : null,
                  ]}
                  onPress={() => handleCalendarItemClick(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
        {selectedDate && (
          <View style={styles.selectedDateBar}>
            <View style={styles.barTop}>
                <Text style={styles.selectedDate}>{selectedDate} 2024</Text>
                <TouchableOpacity style={styles.barClose} onPress={() => setSelectedDate(null)}>
                    <Text style={styles.barClose}>x</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.barMiddle}>
                <Text style={styles.loremText}></Text>
            </View>
            <View style={styles.barBottom}>
                <Text style={styles.loremText}>+ add</Text>
            </View>
          </View>
        )}
        <StatusBar style="auto" />
      </View>
      <View style={styles.footer}>
        <View style={styles.spaceFooter}>
            <TouchableOpacity onPress={() => navigation.navigate('index')}>
                <Image source={require('../assets/footer-image-home.png')} style={styles.footerImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('calender')}>
                <Image source={require('../assets/footer-image-calendar.png')} style={styles.footerImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('training')}>
                <Image source={require('../assets/footer-image-barbell.png')} style={styles.footerImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('settings')}>
                <Image source={require('../assets/footer-image-settings.png')} style={styles.footerImage} />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceHeader: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerImage: {
    height: 40,
    width: 40,
  },
  calendar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  calendarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calendarItem: {
    width: '15%',
    height: 112.2,
    backgroundColor: 'lightgray',
    justifyContent: 'start',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
  },
  selectedItem: {
    backgroundColor: '#787878',
  },
  selectedDateBar: {
    width: '50%',
    height: '30%',
    position: 'absolute',
    backgroundColor: '#787878',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  barClose: {
    position: 'absolute',
    top: -1.7,
    right: 10,
    color: 'white',
    fontSize: 30,
  },
  barTop: {
    position: 'absolute',
    top: 0,
    height: 30,
    width: '100%',
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barMiddle: {
    position: 'absolute',
    top: '50%',
  },
  barBottom: {
    position: 'absolute',
    bottom: 0,
    height: 30,
    width: '100%',
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'start',
    paddingHorizontal: 20,
  },
  selectedDate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  loremText: {
    fontSize: 16,
    color: 'white',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTextSmall: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: 50,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceFooter: {
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
});
