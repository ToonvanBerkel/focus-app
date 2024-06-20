import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, Animated } from 'react-native';

export default function ContactScreen({ navigation }) {
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const [showAdminButton, setShowAdminButton] = useState(false);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

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
        if (name === "Admin-12345" && subject === "Xiahw123" && email === 'none' && message === 'none' ) {
            setShowAdminButton(true);
        } else {
            setIsBoxVisible(true);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }
    };

    const isFormValid = () => {
        return name && email && subject && message;
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo_navbar.png')} style={styles.header} />
            <ScrollView contentContainerStyle={styles.body}>
                <Text style={styles.bodyText}>Get in touch with us</Text>
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
                <TextInput
                    style={styles.input}
                    placeholder="Subject"
                    placeholderTextColor="#547782"
                    value={subject}
                    onChangeText={setSubject}
                />
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Message"
                    placeholderTextColor="#9A9A9A"
                    multiline={true}
                    numberOfLines={4}
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity
                    style={[styles.submitButton, !isFormValid() && styles.disabledButton]}
                    onPress={handleSubmit}
                    disabled={!isFormValid()}
                >
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                {isBoxVisible && (
                    <Animated.View style={[styles.SubmitMessage, { opacity: fadeAnim }]}>
                        <Text style={styles.SubmitMessageText}>Successfully submitted</Text>
                    </Animated.View>
                )}
                {showAdminButton && (
                    <TouchableOpacity
                        style={styles.adminButton}
                        onPress={() => navigation.navigate('admin')}
                    >
                        <Text style={styles.adminButtonText}>Go to Admin</Text>
                    </TouchableOpacity>
                )}
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
    SubmitMessage: {
        position: 'absolute',
        backgroundColor: '#626262',
        display: 'flex',
        justifyContent: 'center',
        width: '90%',
        height: '5%',
        borderRadius: 4,
    },
    SubmitMessageText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 15,
    },
    header: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
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
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 20,
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
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#426465',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
    },
    disabledButton: {
        backgroundColor: '#9A9A9A',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    adminButton: {
        backgroundColor: '#426465',
        borderRadius: 5,
        height: 40,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
        marginBottom: 90,
    },
    adminButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
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