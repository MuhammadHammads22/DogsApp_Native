/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StyleSheet,} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ForgetPassword from './Screens/ForgetPassword';
import TermsAndConditions from './Screens/TermsAndConditions';
import HomeGraph from './Screens/HomeGraph';
import { Provider } from 'react-redux';
import {  store } from './Src/store/Store';
import SignUpForm from './Screens/Signup';
import EmailVerification from './Screens/EmailVerificationScreen';
// import { PersistGate } from 'redux-persist/integration/react';



const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator  initialRouteName={'Login'} screenOptions={{headerShown:false}}>
      <Stack.Screen name="EmailVerification" component={EmailVerification} options={{}} />
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPassword} options={{}} />
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen name="Signup" component={SignUpForm} options={{}} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} options={{}} />
      <Stack.Screen name="HomeGraph" component={HomeGraph} />
    </Stack.Navigator>
  );
}

function App(){
  useEffect(()=>{

      SplashScreen.hide()
  },[])
  // export const persistor=persistStore(store);
return(
      <NavigationContainer>
        <Provider store={store}>
          {/* <PersistGate loading={false} persistor={persistor}> */}
          <MyStack/>
          {/* </PersistGate> */}
        </Provider>
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
