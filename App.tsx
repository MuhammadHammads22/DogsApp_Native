/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react';
import { StyleSheet,} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ForgetPassword from './Screens/ForgetPassword';
import TermsAndConditions from './Screens/TermsAndConditions';
import { Provider, useDispatch } from 'react-redux';
import {  store } from './Src/store/Store';
import SignUpForm from './Screens/Signup';
import EmailVerification from './Screens/EmailVerificationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyDrawer  from './Screens/DrawerNavigator';
import HomeGraph from './Screens/HomeGraph';
import CommentScreen from './Screens/CommentScreen';
import { getAccessToken, getUserData } from './Src/store/localStore';
import { setUserInfo } from './Src/Slices/UserSlice';
import CreatePostScreen from './Screens/CreatePostScreen';
// import { PersistGate } from 'redux-persist/integration/react';

function App(){

const [initialRoute,setInitialRoute]=useState("")
const Stack = createNativeStackNavigator();
useEffect(()=>{
  async function getToken(){
    try{
    var data= await getUserData() 
    if(data){
      setInitialRoute("HomeGraph") //  console.log('Refresh Token:', refreshToken);
    }
    else{
      setInitialRoute("Login") 
    }
    }catch (error) {
      console.error('Error checking token:', error);
    } finally {
      SplashScreen.hide();
    }
  }  
    getToken()
    
},[])

function MyStack() {  
{if(initialRoute==="Login"){
  return(
  <Stack.Navigator  initialRouteName={'Login'} screenOptions={{headerShown:false}}>
    <Stack.Screen name="EmailVerification" component={EmailVerification} options={{}} />
    <Stack.Screen name="ForgetPasswordScreen" component={ForgetPassword} options={{}} />
    <Stack.Screen name="Login" component={Login} options={{}} />
    <Stack.Screen name="Signup" component={SignUpForm} options={{}} />
    <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} options={{}} />
    <Stack.Screen name="HomeGraph" component={HomeGraph} />
    <Stack.Screen name="CommentsScreen" component={CommentScreen} />
    <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />

  </Stack.Navigator>)
}else{
  return(
    <Stack.Navigator  initialRouteName={'HomeGraph'} screenOptions={{headerShown:false}}>
      <Stack.Screen name="EmailVerification" component={EmailVerification} options={{}} />
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPassword} options={{}} />
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen name="Signup" component={SignUpForm} options={{}} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} options={{}} />
      <Stack.Screen name="HomeGraph" component={HomeGraph} />
      <Stack.Screen name="CommentsScreen" component={CommentScreen} />
      <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
    </Stack.Navigator>)
}
}
}


  
  // export const persistor=persistStore(store);
return(
      <NavigationContainer>
        <Provider store={store}>
          {/* <PersistGate loading={false} persistor={persistor}> */}
          <MyStack/>
          {/* <MyDrawer/> */}
        </Provider>
      </NavigationContainer>
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
