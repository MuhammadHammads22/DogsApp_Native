import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({ navigation }) => {
  const nav = useNavigation()
  useLayoutEffect(() => {
    nav.setOptions({ headertitle: "" })
  }, [])
  return (
    <SafeAreaView>
    <View>
      <Text>Home</Text>
    </View>
    </SafeAreaView>
  )
}

export default Home