import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../FireBaseConfig'
import { AntDesign } from '@expo/vector-icons';

const Profil = ({ navigation }) => {
    return (
        <View>
            <View style={{ backgroundColor: '#101621', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ top: 50, position: 'absolute', display: 'flex', width: '100%', paddingLeft: '5%' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SutasMilkProduct')}>
                        <AntDesign name="left" size={24} color="#FFBF58" />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: '#FFBF58', fontSize: 20 }}>{FIREBASE_AUTH.currentUser.email}</Text>
                <View style={{ bottom: 0, position: 'absolute', width: '100%', backgroundColor: '#FFBF58', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('BuyScreen')} style={{ margin: 30 }}>
                        <AntDesign name="home" size={35} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profil')} style={{ margin: 30 }}>
                        <AntDesign name="user" size={35} color="#ff4d6d" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Profil

const styles = StyleSheet.create({})