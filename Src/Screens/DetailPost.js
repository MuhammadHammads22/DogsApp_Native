import { View, Text, Button, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';
export default function DetailPost({ navigation }) {
  const { params } = useRoute()
  // console.log(params)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.name,
    })
  }, [navigation]);
  const url=(params.isSaved)? require('C:\\Test-native\\ReactApp\\Src\\assets\\heartf.png'):
require('C:\\Test-native\\ReactApp\\Src\\assets\\hearto.png')
 

  return (



    <SafeAreaView style={{ flex: 1 }}>
      <Image  
                source={url}
                style={{
                    position:'absolute',
                    right:14,
                    top:230,
                    zIndex:50,
                  width: 30,
                  height: 30,
                  tintColor:'Black'
                }}
              />
      <Image style={{ borderBottomLeftRadius:responsiveWidth(7),borderBottomRightRadius:responsiveWidth(7),height: responsiveHeight(40), width: responsiveWidth(100), resizeMode: 'cover', marginBottom: responsiveHeight(2.5) }} source={{ uri: params.imageUrl }} />
      <View style={{ marginHorizontal: responsiveWidth(2) }}>
        <View style={{shadowColor:"black",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.2, shadowRadius: 3.84,    elevation: 5, marginBottom:responsiveHeight(2.5),padding: responsiveWidth(4), borderRadius: responsiveWidth(10), backgroundColor: 'white' }}>
          <Text style={{ color:'brown',fontSize: responsiveWidth(6), marginBottom: responsiveHeight(1) }}>Characteristics</Text>
          <Text style={{ color:'purple',fontSize: responsiveWidth(4) }}>{params.characteristics}</Text>
        </View>
        <View style={{ shadowColor:"black",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.2, shadowRadius: 3.84,    elevation: 5, marginBottom:responsiveHeight(2.5),padding: responsiveWidth(4), borderRadius: responsiveWidth(10), backgroundColor: 'white' }}>
          <Text style={{ color:'brown',fontSize: responsiveWidth(6), marginBottom: responsiveHeight(1) }}>Region</Text>
          <Text style={{color:'purple', fontSize: responsiveWidth(4) }}>{params.region}</Text>
        </View>
      </View>
    </SafeAreaView>

  )
}