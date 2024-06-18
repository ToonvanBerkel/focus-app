import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Animated } from 'react-native';

export default function CheckoutScreen({ navigation }) {
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [billingAddress, setBillingAddress] = useState('');

    useEffect(() => {
        if (isBoxVisible) {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }).start(() => {
                setIsBoxVisible(false);
                fadeAnim.setValue(1);
            });
        }
    }, [isBoxVisible, fadeAnim]);

    const handleSubmit = () => {
        setIsBoxVisible(true);
        setName('');
        setEmail('');
        setPaymentMethod(null);
        setCardNumber('');
        setExpirationDate('');
        setCvc('');
        setBillingAddress('');
    };

    const isFormValid = () => {
        if (paymentMethod === 'card') {
            return name && email && cardNumber && expirationDate && cvc && billingAddress;
        }
        if (paymentMethod === 'crypto') {
            return name && email;
        }
        return false;
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#547782"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#547782"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <View>
                    <Text style={styles.selectPaymentText}>SELECT PAYMENT</Text>
                    <TouchableOpacity onPress={() => setPaymentMethod('card')}>
                        <Text style={styles.paymentOption}>{paymentMethod === 'card' ? '●' : '○'} Pay with Credit/Debit Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setPaymentMethod('crypto')}>
                        <Text style={styles.paymentOption}>{paymentMethod === 'crypto' ? '●' : '○'} Pay with Crypto</Text>
                    </TouchableOpacity>
                </View>
                {paymentMethod === 'card' && (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Card number"
                            placeholderTextColor="#547782"
                            value={cardNumber}
                            onChangeText={setCardNumber}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Expiration Date"
                            placeholderTextColor="#547782"
                            value={expirationDate}
                            onChangeText={setExpirationDate}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="CVC"
                            placeholderTextColor="#547782"
                            value={cvc}
                            onChangeText={setCvc}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Billing Address"
                            placeholderTextColor="#547782"
                            value={billingAddress}
                            onChangeText={setBillingAddress}
                        />
                    </View>
                )}
                {paymentMethod === 'crypto' && (
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.cryptoOption}>USDC-20</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.cryptoOption}>ERC-20</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <TouchableOpacity
                    style={[styles.submitButton, { backgroundColor: isFormValid() ? '#547782' : '#54778280' }]}
                    onPress={handleSubmit}
                    disabled={!isFormValid()}
                >
                    <Text style={styles.submitButtonText}>Submit</Text>
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
    input: {
        height: 40,
        backgroundColor: '#171717',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginBottom: 15,
        paddingHorizontal: 10,
        color: 'white',
        fontSize: 18,
    },
    body: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'start',
        paddingTop: 100,
        width: '80%',
        alignSelf: 'center',
    },
    selectPaymentText: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
    },
    paymentOption: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
    },
    cryptoOption: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
        backgroundColor: '#54778280',
        padding: 10,
    },
    submitButton: {
        width: 290,
        padding: 15,
        borderRadius: 5,
        position: 'absolute',
        bottom: 100,
        alignSelf: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
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
    spaceFooter: {
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
    },
    footerImage: {
        height: 20,
        width: 30,
    },
    footerText: {
        color: 'white',
    },
});