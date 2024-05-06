import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Eula = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.spaceHeader}>
                <Text style={styles.headerText}>FOCUS</Text>
                <Text style={styles.headerTextSmall}>Premium</Text>
            </View>
        </View>
        <View style={styles.bodySettings}>
          <View style={styles.listSettings}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('settings')}>
                    <View style={styles.row}>
                        <Image source={require('../assets/return.png')} style={styles.returnImage}></Image>
                        <Text style={styles.listSettingsText}>EULA</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>
                    End-User License Agreement (EULA)
                    This End-User License Agreement ("EULA") is a legal agreement between you (either an individual or a single entity) and "FOCUS" for the "FOCUS" application software ("Software") accompanying this EULA.
                    By installing, copying, or otherwise using the Software, you agree to be bound by the terms of this EULA. If you do not agree to the terms of this EULA, do not install or use the Software.
                    License Grant: "FOCUS" grants you a personal, non-exclusive, non-transferable, limited license to use the Software solely for your personal or internal business purposes in accordance with the terms of this EULA.
                    Restrictions: You may not sublicense, rent, lease, lend, distribute or otherwise transfer the Software or any rights granted hereunder. You may not modify, translate, reverse engineer, decompile, disassemble or create derivative works based on the Software. You may not remove any proprietary notices or labels on the Software.
                    Ownership: The Software is licensed, not sold. "FOCUS" retains all right, title, and interest in and to the Software and all copies thereof.
                    No Warranty: The Software is provided "as is" without warranty of any kind. To the maximum extent permitted by applicable law, "FOCUS" disclaims all warranties, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    Limitation of Liability: In no event shall "FOCUS" be liable for any special, incidental, indirect, or consequential damages whatsoever (including, without limitation, damages for loss of profits, business interruption, loss of information, or any other pecuniary loss) arising out of the use of or inability to use the Software, even if "FOCUS" has been advised of the possibility of such damages.
                    Termination: This EULA is effective until terminated. Your rights under this license will terminate automatically without notice from "FOCUS" if you fail to comply with any term(s) of this EULA. Upon termination of this EULA, you shall cease all use of the Software and destroy all copies, full or partial, of the Software.
                    Governing Law: This EULA shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any dispute arising out of or in connection with this EULA shall be subject to the exclusive jurisdiction of the courts located in [Jurisdiction].
                    By installing or using the Software, you acknowledge that you have read this EULA, understand it, and agree to be bound by its terms and conditions. If you do not agree to the terms and conditions of this EULA, do not install or use the Software.
                </Text>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
        <View style={styles.footer}>
            <View style={styles.spaceFooter}>
                <TouchableOpacity onPress={() => navigation.navigate('index')}>
                    <Image source={require('../assets/footer-image-home.png')} style={styles.footerImage} />
                </TouchableOpacity>
                <Image source={require('../assets/footer-image-calendar.png')} style={styles.footerImage} />
                <Image source={require('../assets/footer-image-barbell.png')} style={styles.footerImage} />
                <TouchableOpacity onPress={() => navigation.navigate('settings')}>
                <Image source={require('../assets/footer-image-settings.png')} style={styles.footerImage} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Eula

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
  bodySettings: {
    flex: 1,
    alignItems: 'start',
    backgroundColor: 'white',
  },
  profileImage: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  profileTab: {
    width: '60%',
    display: 'flex',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {
    width: '80%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  listSettings: {
    display: 'flex',
    alignItems: 'start',
    overflow: 'show',
    marginLeft: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listSettingsText: {
    lineHeight: 60,
    fontSize: 24,
  },
  darkModeImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  returnImage: {
    width: 30,
    height: 30,
    marginRight: 10,
},
  smallText: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 20,
  },
  activeCircle: {
    display: 'flex',
    width: 120,
    height: 120,
    backgroundColor: 'lightgreen',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 10,
    width: '90%',
  },
  normalText: {
    fontSize: 24,
  },
  linkText: {
    color: 'blue',
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
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerImage: {
    height: 40,
    width: 40,
  }
});