import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'

const DogCard = (params) => {
const navigation=params.navigation
const url=(params.isSaved)? require('C:\\Test-native\\ReactApp\\Src\\assets\\heartf.png'):
require('C:\\Test-native\\ReactApp\\Src\\assets\\hearto.png')
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate('DetailPostScreen',
            {
            id: params.id,
            name: params.name,
            characteristics:params.characteristic,
            region:params.region ,
            imageUrl: params.image,
            isSaved:params.isSaved
          })
          }}>
        <View style={{shadowColor:"black",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.25, shadowRadius: 3.84,    elevation: 5,alignItems:'center',margin:10,width:responsiveWidth(44),height:responsiveHeight(45),borderRadius:responsiveWidth(10),backgroundColor:"white"}} >
        {/* const source= focused
              ? require('C:\\Test-native\\ReactApp\\Src\\assets\\heartf.png')  // Path for the focused state
              : require('C:\\Test-native\\ReactApp\\Src\\assets\\hearto.png'); */}
        <Image  
                source={url}
                style={{
                    position:'absolute',
                    right:14,
                    top:14,
                    zIndex:50,
                  width: 30,
                  height: 30,
                  tintColor:'Black'
                }}
              />
            <Image style={{width:responsiveWidth(44),height:responsiveHeight(35),borderRadius:responsiveWidth(10),resizeMode:'cover'}} source={{uri:params.image}}/>
            <Text style={{marginTop: 10,fontSize: 16,fontWeight: 'bold'}}>{params.name}</Text>
            <Text style={{marginTop: 10,fontSize: 12,color:'gray',fontWeight: 'bold'}}>{params.region}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default DogCard