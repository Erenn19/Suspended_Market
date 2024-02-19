import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const BuyScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#faf3dd', width: '100%', height: '100%' }}>
            <View style={{ width: '100%', height: 150, backgroundColor: '#FFBF58', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                <TouchableOpacity style={{ width: '20%', height: '20%' }}>
                    <Text style={{ height: '160%', width: '120%', marginTop: '110%', fontSize: 20, marginLeft: '120%', backgroundColor: '#BB342F', textAlign: 'center', borderRadius: 10 }}>Add to Basket</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('GetFromBasket')} style={{ width: '20%', height: '20%' }}>
                    <Text style={{ height: '168%', width: '120%', marginTop: '72%', fontSize: 20, marginLeft: '300%', backgroundColor: 'white', textAlign: 'center', borderRadius: 10, alignItems: 'center', margin: 2 }}>Get from Basket</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginLeft: '5%', marginTop: '5%' }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Markets we have agreements with
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('MigrosBuyScreen')}>
                        <Image style={{ width: 100, height: 100, marginTop: 10, margin: 15 }} source={require('../images/migrosMarket.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    All Markets
                </Text>
                <View style={{ flexDirection: 'row-reverse' }}>
                    <Image style={{ width: 100, height: 100, marginTop: 10, margin: 15 }} source={require('../images/sokMarket.png')} />
                    <Image style={{ width: 100, height: 100, marginTop: 10, margin: 15 }} source={require('../images/bimMarket.png')} />
                    <TouchableOpacity onPress={() => navigation.navigate('MigrosBuyScreen')}>
                        <Image style={{ width: 100, height: 100, marginTop: 10, margin: 15 }} source={require('../images/migrosMarket.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 100, height: 100, marginTop: 10, margin: 15 }} source={require('../images/a101Market.png')} />
                    <Image style={{ width: 100, height: 100, marginTop: 10, margin: 15 }} source={require('../images/happyCenterMarket.png')} />
                </View>
            </View>
            <View style={{ bottom: '-0%', position: 'absolute', width: '100%', height: 94, backgroundColor: '#FFBF58', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <TouchableOpacity style={{ margin: 30 }}>
                    <AntDesign name="home" size={35} color="#ff4d6d" />
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate('ShoppingScreen')} style={{ margin: 30 }}>
                    <AntDesign name="shoppingcart" size={35} color="black" />
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => navigation.navigate('Profil')} style={{ margin: 30 }}>
                    <AntDesign name="user" size={35} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BuyScreen

const styles = StyleSheet.create({})