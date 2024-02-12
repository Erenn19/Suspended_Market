import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const RegisterHome = ({ navigation }) => {
  return (
    <View>
      <View style={{ backgroundColor: '#101621', width: '100%', height: '40%' }}>
        <Image style={{ width: 100, height: 150, marginLeft: '35%', marginTop: '20%' }} source={require('../images/Logo.png')} />
        <Text style={{ color: 'white', textAlign: 'center ', justifyContent: 'center', marginLeft: '35%', marginTop: '10%', fontSize: 40 }}>Login</Text>
      </View>
      <View style={{ backgroundColor: 'white', width: '100%', height: '60%', borderTopLeftRadius: 100 }}>
        <Text style={{ marginLeft: '20%', marginTop: '20%', color: '#101621' }}>Email</Text>
        <View>
          <TextInput
            style={{ width: '55%', marginLeft: '20%', height: 40, borderColor: '#101621', borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, margin: '1%' }}
            placeholder="✉️Please enter your mail"
            placeholderTextColor={'#C5CBD3'}
          />
        </View>
        <Text style={{ marginLeft: '20%', marginTop: '5%', color: '#101621' }}>Password</Text>
        <View>
          <TextInput
            style={{ width: '55%', marginLeft: '20%', height: 40, borderColor: '#101621', borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, margin: '1%' }}
            placeholder="🔑Please enter your password"
            placeholderTextColor={'#C5CBD3'}
          />
        </View>

        <TouchableOpacity style={{ backgroundColor: '#101621', height: '10%', justifyContent: 'center', width: '55%', marginLeft: '20%', marginTop: '5%', borderRadius: 10 }}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 17 }}>Login</Text>
        </TouchableOpacity>
        <Text style={{ marginLeft: '43%', marginTop: '5%', fontSize: 30 }}>OR</Text>

        <TouchableOpacity style={{ backgroundColor: 'white', height: '10%', justifyContent: 'center', marginLeft: '5%', marginTop: '2%', borderRadius: 80, alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', color: 'black', fontSize: 17, borderWidth: 1, borderRadius: 10, alignItems: 'center' }}>
            <Image source={require('../images/devicon_google.png')} />
            Continue with Google
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: '3%', marginLeft: '25%' }}>
          <Text>
            Don’t you have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterHome')}>
            <Text style={{ color: 'red', marginTop: '-5%', marginLeft: '60%', marginBottom: '-30%' }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

export default RegisterHome

const styles = StyleSheet.create({

})