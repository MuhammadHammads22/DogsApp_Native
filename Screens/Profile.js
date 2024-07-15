import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setUserInfoToInitialState } from '../Src/Slices/UserSlice'
import { CommonActions } from '@react-navigation/native'
import { removeUserData } from '../Src/store/localStore'

async function Logout(navigation,dispatch){
  try{
  await removeUserData()
  dispatch(setUserInfoToInitialState())
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


const Profile = ({navigation}) => {
  const dispatch= useDispatch()
  return (
    <SafeAreaView>
    <TouchableOpacity onPress={()=>{Logout(navigation,dispatch)}} >
                <LinearGradient
                  onPress={() => { null }}
                  colors={['#42a1f5', '#03bafc', '#42c5f5']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 100,
                    width: responsiveWidth(60),
                    alignSelf: 'center',
                    alignItems: 'center',
                    paddingVertical: responsiveHeight(1),
                    
                  }}>
                  <Text style={{ color: 'white', fontSize: 19 }}>LOGIN</Text>
                </LinearGradient>
              </TouchableOpacity> 
            
    </SafeAreaView>
  )
}

export default Profile