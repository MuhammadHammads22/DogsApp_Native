import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'



const Home = ({ navigation }) => {


  async function Logout(){
    try{
    await AsyncStorage.removeItem('accessToken').then(console.log("access remove"))
    await AsyncStorage.removeItem('refreshToken').then(console.log("refresh remove"))
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    );
  }catch(error){
      console.log(error,"error logging out")
  }
    }
    
  const nav = useNavigation()
  useLayoutEffect(() => {
    nav.setOptions({ headertitle: "" })
  }, [])
  return (
    <SafeAreaView>
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={
                 Logout
                } style={{ backgroundColor: '#03bafc', alignSelf: 'center', padding: responsiveWidth(3), margin: responsiveWidth(2), borderRadius: responsiveWidth(3) }}>
                  <Text styles={{ fontSize: responsiveHeight(1.5), fontWeight: 'bold', color: '#FFFFFF' }}>Logout</Text>
                </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Home