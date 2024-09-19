import { Image, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Home from './Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Favourite from './Favourite';





const Tab = createBottomTabNavigator();

const HomeGraph = ({navigation}) => {
  return (
    <Tab.Navigator initialRouteName='Dogs'screenOptions={{
      headerShown:false,
      tabBarStyle: {
      // borderTopLeftRadius: responsiveHeight(6),
      // borderTopRightRadius: responsiveHeight(6),
      width: responsiveWidth(100),
      backgroundColor: 'white',
      height:
        Platform.OS === 'ios' ? responsiveHeight(13) : responsiveHeight(8),
      elevation: 4,
      bottom: Platform.OS === 'ios' ? responsiveHeight(-2) : 0,
    }}}
    >
      <Tab.Screen options={{
        
        headerTitle:'Dogs',
            // gestureEnabled:true,
            // animationTypeForReplace:'pop',
            headerShown:true,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor:"gray",
            tabBarIcon: ({focused}) => {
             const source= focused
             ? require('C:\\Test-native\\ReactApp\\Src\\assets\\pawprintf.png')  // Path for the focused state
             : require('C:\\Test-native\\ReactApp\\Src\\assets\\pawprinto.png');
              return( <Image
                source={source}
                style={{
                  width: 30,
                  height: 30,
                  tintColor:'Black'
                }}
              />)
      }}} name="Dogs" component={Home}  />
      <Tab.Screen options={{
            // gestureEnabled:true,
            // animationTypeForReplace:'pop',
            headerShown:true,

            headerTitle:'Favourite',
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor:"gray",
            tabBarIcon: ({focused}) => {
             const source= focused
              ? require('C:\\Test-native\\ReactApp\\Src\\assets\\heartf.png')  // Path for the focused state
              : require('C:\\Test-native\\ReactApp\\Src\\assets\\hearto.png');
              return( <Image
                source={source}
                style={{
                  width: 30,
                  height: 30,
                  tintColor:'Black'
                }}
              />)
      }}} name="Favourite" component={Favourite} />
    
    </Tab.Navigator>
    
  )
}

export default HomeGraph