/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ForgetPassword from './Screens/ForgetPassword';
import TermsAndConditions from './Screens/TermsAndConditions';
import HomeGraph from './Screens/HomeGraph';
import { Provider } from 'react-redux';
import { store } from './Src/Api/store';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { Api } from './Src/Api/Auth';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator  initialRouteName='Login' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen name="Signup" component={Signup} options={{}} />
      <Stack.Screen name="FogetPassword" component={ForgetPassword} options={{}} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} options={{}} />
      <Stack.Screen name="HomeGraph" component={HomeGraph} />
    </Stack.Navigator>
  );
}

function App(){
  useEffect(()=>{
      SplashScreen.hide()
  },[])
return(
  
      <NavigationContainer>
        <ApiProvider api={Api}>
          <MyStack/>
        </ApiProvider>
      </NavigationContainer>
    
  // <Text style={{textAlign:'justify',fontSize:20,justifyContent:'center',alignContent:'center',color:'red',padding:20,backgroundColor:'orange'}}>hello world</Text>
)

}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
