import { View, Text, Button } from 'react-native'
import React from 'react'
import Login from './Login'
import { SafeAreaView } from 'react-native-safe-area-context'


const Signup=({navigation})=>{
  return (
    <SafeAreaView>
    <View>
      <Text>Signup</Text>
      <Button onPress={()=>navigation.navigate("Login")}>signup</Button>
    </View>
    </SafeAreaView>

  )
}

export default Signup