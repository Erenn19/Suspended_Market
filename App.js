
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import SecondHome from './components/SecondScreen';
import ThirdHome from './components/ThirdScreen';
import FourHome from './components/FourScreen';
import RegisterHome from './components/RegisterScreen';
import SignIn from './components/SignInScreen';
import SignInScreen from './components/SignInScreen';
import { initializeApp } from '@firebase/app'
import MainHome from './components/MainHome';
import BuyScreen from './components/BuyScreen';
import ShoppingScreen from './components/ShoppingScreen';
import MigrosBuyScreen from './components/MigrosBuyScreen';
import GetFromBasket from './components/GetFromBasket';
import SutasMilkProduct from './components/SutasMilkProduct';
import Profil from './components/Profil';

// const firebaseConfig = {
//   apiKey: "AIzaSyBVRWq7qX09PZZLwaf1nEp8JYpC_B7Eq1A",
//   authDomain: "market-auth-2bc5e.firebaseapp.com",
//   projectId: "market-auth-2bc5e",
//   storageBucket: "market-auth-2bc5e.appspot.com",
//   messagingSenderId: "1040338893579",
//   appId: "1:1040338893579:web:0dc50a49ab4de58c6c400e",
//   measurementId: "G-CQ7V56MJXB"
// };


// const app = initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SecondHome" component={SecondHome} />
        <Stack.Screen name="ThirdHome" component={ThirdHome} />
        <Stack.Screen name="FourHome" component={FourHome} />
        <Stack.Screen name="RegisterHome" component={RegisterHome} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="MainHome" component={MainHome} />
        <Stack.Screen name="BuyScreen" component={BuyScreen} />
        <Stack.Screen name="ShoppingScreen" component={ShoppingScreen} />
        <Stack.Screen name="MigrosBuyScreen" component={MigrosBuyScreen} />
        <Stack.Screen name="GetFromBasket" component={GetFromBasket} />
        <Stack.Screen name="SutasMilkProduct" component={SutasMilkProduct} />
        <Stack.Screen name="Profil" component={Profil} />

      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;