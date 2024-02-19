import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const ShoppingScreen = ({ navigation }) => {

  const [price, setPrice] = useState(3);

  const [count, setCount] = useState(1);




  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count - 1 >= 0) {
      setCount(count - 1);
    } else {
      alert('The price cannot go negative');
    }
  };
  const showAlert = () => {
    Alert.alert('Tebrikler', 'ÜRÜN ALDINI');
  };

  return (
    <View style={{ height: '100%', backgroundColor: "white", }}>
      <View style={{ backgroundColor: '#101621', height: '35%', width: '100%' }}>
        <TouchableOpacity onPress={() => navigation.navigate('SutasMilkProduct')}>
          <AntDesign style={{ marginTop: '12%', marginLeft: '5%' }} name="left" size={24} color="#FFBF58" />
        </TouchableOpacity>

        <Text style={{ color: 'white', marginLeft: '42%', fontSize: 40, marginTop: '5%', fontWeight: 'bold' }}>Cart</Text>

      </View>

      <View style={{ height: '80%', backgroundColor: 'white' }}>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Image style={{ marginTop: '5%', backgroundColor: 'white', marginLeft: '10%' }} source={require('../images/sutasSmall.png')} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginTop: '10%', marginRight: '15%', fontWeight: 'bold', fontSize: 15 }}>Sütas <Text style={{ fontWeight: 'normal' }}>semi-skimmed milk</Text></Text>
          </View>

          <View style={{ margin: '5%', width: '10%', }}>
            <View style={{ backgroundColor: 'gray', width: "100%", padding: 3, borderRadius: 10 }}>
              <TouchableOpacity onPress={decreaseCount}><Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 10 }}>-</Text></TouchableOpacity>

            </View>
            <Text style={{ backgroundColor: 'white', textAlign: 'center' }}>{count}</Text>
            <View style={{ backgroundColor: '#FFBF58', width: "100%", borderRadius: 10 }}>
              <TouchableOpacity onPress={increaseCount}><Text style={{ textAlign: 'center' }}>+</Text></TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={{ width: '80%', height: '1%', backgroundColor: 'gray', marginLeft: '9%', marginTop: '10%', borderRadius: 100 }}></View>

        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: '10%', marginTop: '5%' }}>Total :                                               <Text style={styles.price}>{count * price} <Text style={{ color: 'green' }}>$</Text></Text></Text>
        </View>
        <TouchableOpacity onPress={showAlert} style={{ width: '90%', marginLeft: '5%', marginTop: '-5%' }}>
          <Text style={{ textAlign: 'center', justifyContent: 'center', margin: '8%', borderRadius: 10, backgroundColor: '#FFBF58', height: '25%', padding: 10, fontWeight: 'bold' }}>Checkout</Text>
        </TouchableOpacity>
      </View>

      <View style={{ bottom: 0, position: 'absolute', width: '100%', backgroundColor: '#FFBF58', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        <TouchableOpacity style={{ margin: 30 }}>
          <AntDesign name="home" size={35} color="#ff4d6d" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profil')} style={{ margin: 30 }}>
          <AntDesign name="user" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ShoppingScreen

const styles = StyleSheet.create({
  price: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '10%',
    height: '10%',
  }
})