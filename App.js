
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

      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;