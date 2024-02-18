import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FIREBASE_AUTH } from '../FireBaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const RegisterHome = ({ navigation }) => {

    // const signUp = async () => {
    //     await createUserWithEmailAndPassword(FIREBASE_AUTH, 'test2@gmail.com', '1234567890')
    // }

    const [value, setValue] = React.useState({
        email: '',
        password: '',
        password2: '',
    })

    async function signUp() {
        if (value.email === '' || value.password === '') {
            Alert.alert(
                'Hata Mesajı',
                'Password and Email are can not be empty',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                    },
                ],
                { cancelable: false }
            );
            return;
        }

        if (value.password !== value.password2) {
            Alert.alert(
                'Hata Mesajı',
                'Passwords are not match.',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                    },
                ],
                { cancelable: false }
            );
            return;
        }

        try {
            await createUserWithEmailAndPassword(FIREBASE_AUTH, value.email, value.password);
            navigation.navigate('MainHome');
        } catch (error) {
            Alert.alert(
                'Hata Mesajı',
                error,
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                    },
                ],
                { cancelable: false }
            );
        }
    }

    return (
        <View>
            <View style={{ width: '100%', height: '40%', backgroundColor: '#101621' }}>
                <View>
                    <Text style={{ color: 'white', textAlign: 'center ', justifyContent: 'center', marginLeft: '32%', marginTop: '45%', fontSize: 45 }}>Sign Up</Text>
                </View>
            </View>
            <View style={{ width: '100%', height: '60%', backgroundColor: 'white', borderTopLeftRadius: 100 }}>
                <View style={{ width: '100%' }}>
                    <Text style={{ marginLeft: '20%', marginTop: '8%', color: '#101621' }}>Email</Text>
                    <View>
                        <TextInput
                            style={{ width: '57%', marginLeft: '20%', height: 40, borderColor: '#101621', borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, margin: '1%' }}
                            placeholder="✉️Please enter your mail"
                            value={value.email}
                            placeholderTextColor={'#C5CBD3'}
                            onChangeText={(text) => setValue({ ...value, email: text })}

                        />
                    </View>
                    <Text style={{ marginLeft: '20%', marginTop: '2%', color: '#101621' }}>Password</Text>
                    <View>
                        <TextInput
                            style={{ width: '57%', marginLeft: '20%', height: 40, borderColor: '#101621', borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, margin: '1%' }}
                            placeholder="🔑Please enter your password"
                            placeholderTextColor={'#C5CBD3'}
                            onChangeText={(text) => setValue({ ...value, password: text })}
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={{ marginLeft: '20%', marginTop: '2%', color: '#101621' }}>Confirm Password</Text>
                    <View>
                        <TextInput
                            style={{ width: '57%', marginLeft: '20%', height: 40, borderColor: '#101621', borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, margin: '1%' }}
                            placeholder="🔑Please enter your password again"
                            placeholderTextColor={'#C5CBD3'}
                            onChangeText={(text) => setValue({ ...value, password2: text })}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity onPress={() => signUp()} style={{ backgroundColor: '#101621', height: 40, justifyContent: 'center', width: '57%', marginLeft: '20%', marginTop: '10%', borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 25 }}>Sign Up </Text>
                    </TouchableOpacity>
                    <Text style={{ marginLeft: '45%', marginTop: '2%', fontSize: 30, marginBottom: '2%' }}>OR</Text>
                    <View style={{ marginLeft: '16%' }}>
                        <Text>
                            Already have an account?
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        <Text style={{ color: 'red', marginTop: '-5%', marginLeft: '65%', fontWeight: 'bold', fontSize: 15 }}>Sign In</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View >
    )
}

export default RegisterHome

const styles = StyleSheet.create({

})