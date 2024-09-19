import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Favourite = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>no items</Text>
      {/* <MaterialCommunityIcons name='favorite-outline' size={20}color={focused ? 'white' : 'gray'} /> */}
    </View>
    </SafeAreaView>

  )
}

export default Favourite