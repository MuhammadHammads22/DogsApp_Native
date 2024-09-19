import 'react-native-gesture-handler'

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeGraph from './Src/Screens/HomeGraph';
import SearchScreen from './Src/Screens/SearchScreen';
import DetailPost from './Src/Screens/DetailPost';
import { Provider } from 'react-redux';
import { store } from './Src/store/store';
function App(){

const Stack = createNativeStackNavigator();
useEffect(()=>{
      SplashScreen.hide();     
},[])

function MyStack() {  
  return(
  <Stack.Navigator  initialRouteName={'HomeGraph'} screenOptions={{headerShown:false}}>
    <Stack.Screen name="HomeGraph" component={HomeGraph} />
    <Stack.Screen name="DetailPostScreen" component={DetailPost} options={{presentation:'modal',headerShown:true}} />
    <Stack.Screen name="SearchScreen" component={SearchScreen} options={{presentation:'modal'}} />
  </Stack.Navigator>)


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


export default App;
