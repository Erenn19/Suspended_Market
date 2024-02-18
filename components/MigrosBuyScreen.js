import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const MigrosBuyScreen = ({ navigation }) => {
    const showAlert = () => {
        Alert.alert('Error', 'These products are not yet in service.');
    };
    return (
        <View style={{ height: '100%' }}>
            <View style={{ width: '100%', backgroundColor: '#FFBF58', height: 150, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                <Image style={{ width: 50, height: 50, marginTop: 60, margin: 15, marginLeft: 30 }} source={require('../images/migrosMarket.png')} />
                <Text style={{ width: '40%', marginLeft: '20%', marginTop: -50, fontWeight: 'bold', fontSize: 15 }}>Migros Market</Text>
            </View>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ margin: 10 }}>
                        <Text style={{ color: '#FFBF58', fontWeight: 'bold' }}>Milk & Breakfast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={showAlert} style={{ margin: 10, fontWeight: 'bold' }}>
                        <Text>Fruit & Vegetable</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={showAlert} style={{ margin: 10, fontWeight: 'bold' }}>
                        <Text>Snacks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={showAlert} style={{ margin: 10, fontWeight: 'bold' }}>
                        <Text>Materials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={showAlert} style={{ margin: 10, fontWeight: 'bold' }}>
                        <Text>School stuff</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', margin: 10, marginLeft: '3%' }}>
                <TouchableOpacity onPress={() => navigation.navigate('SutasMilkProduct')}>
                    <Image source={require('../images/milk.png')} />
                </TouchableOpacity>
                <Image style={{ marginLeft: '30%' }} source={require('../images/secondMilk.png')} />
            </View>
            <View style={{ flexDirection: 'row', marginLeft: '3%' }}>
                <View>
                    <Text style={{ color: '#FFBF58', fontSize: 20, marginLeft: '5%' }} >3$</Text>
                    <Text style={{ fontSize: 10, marginLeft: '5%' }} ><Text style={{ fontWeight: 'bold' }}>Sütaş</Text> semi-skimmed milk 1LT</Text>
                </View>
                <View style={{ marginLeft: '10%' }}>
                    <Text style={{ color: '#FFBF58', fontSize: 20, marginLeft: '5%' }} >5$</Text>
                    <Text style={{ fontSize: 10, marginLeft: '5%' }} ><Text style={{ fontWeight: 'bold' }}>İçim</Text> semi-skimmed milk 200ml</Text>
                </View>
            </View>
            <View style={{ height: '45%' }}>
                <View style={{ bottom: 0, position: 'absolute', width: '100%', backgroundColor: '#FFBF58', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <TouchableOpacity style={{ margin: 30 }}>
                        <AntDesign name="home" size={35} color="#ff4d6d" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ShoppingScreen')} style={{ margin: 30 }}>
                        <AntDesign name="shoppingcart" size={35} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 30 }}>
                        <AntDesign name="user" size={35} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MigrosBuyScreen

const styles = StyleSheet.create({})