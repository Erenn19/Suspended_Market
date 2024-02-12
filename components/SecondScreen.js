import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const SecondHome = ({ navigation }) => {
    return (
        <View>
            <View style={{ width: '20%', height: '40%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 90, height: 5, backgroundColor: '#101621', marginTop: 40, borderRadius: 100, marginLeft: 15 }}></View>
                    <View style={{ width: 90, height: 5, backgroundColor: '#101621', marginTop: 40, borderRadius: 100, marginLeft: 6 }}></View>
                    <View style={{ width: 90, height: 5, backgroundColor: '#d9d9d9', marginTop: 40, borderRadius: 100, marginLeft: 6 }}></View>
                    <View style={{ width: 90, height: 5, backgroundColor: '#d9d9d9', marginTop: 40, borderRadius: 100, marginLeft: 6 }}></View>
                </View>
                <View style={{ margin: 200, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../images/Illustration1.png')} />
                </View>
            </View>
            <View style={{ width: '100%', height: '100%', marginTop: 20 }} >
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, color: '#101621', marginLeft: -10 }}>Fill the Form</Text>
                </View>
                <Text style={{ marginTop: 20, alignItems: 'center', flexDirection: 'row', margin: 100, color: 'gray' }}>
                    Lorem ipsum dolor sit amet,  consectetur adipiscing elit
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('ThirdHome')}>
                    <View style={{ borderRadius: 50, alignItems: 'center', backgroundColor: '#101621', width: 300, justifyContent: 'center', height: 50, marginLeft: 50, marginTop: -50 }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Next  <AntDesign name="arrowright" size={17} color="white" /></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ThirdHome')}>
                    <View>
                        <Text style={{ textAlign: 'center', marginTop: 30, fontSize: 20, marginLeft: -30 }}>
                            Skip
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SecondHome

const styles = StyleSheet.create({

})