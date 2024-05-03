import { View, Text, Button, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLoginMutation } from '../Src/Api/Auth'

import { loginUser } from '../Src/Constants/authapi';



const Login = ({navigation}) => {
  const [login,{error}]=useLoginMutation();
  return (
    <SafeAreaView>
    <View>
      <TextInput placeholder='email' style={{borderColor:'black',borderWidth:2,marginBottom:8}} />
      <TextInput placeholder='password' style={{borderColor:'black',borderWidth:2,marginBottom:8}} />
     <Button title="login" onPress={ ()=>loginUser("admin123@gmail.com","admin123").then(data => {
    // Handle successful login (if needed)
    console.log('Logged in successfully!', data);
  }).catch(error => {
    // Handle login error
    console.error('Login error:', error.message);
  })}/>
     { console.warn(error)}
    </View>
    </SafeAreaView>
  )
}

export default Login

