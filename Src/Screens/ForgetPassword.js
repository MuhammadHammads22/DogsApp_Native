import {  ScrollView, TextInput, View, Text, KeyboardAvoidingView, StatusBar, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
import React, {  useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import LinearGradient from 'react-native-linear-gradient'
import { useSendPasswordResetEmailMutation } from '../Api/Auth'

const ForgetPassword = ({navigation}) => {
  const [sendResetEmail, { data, isLoading, error }] = useSendPasswordResetEmailMutation();


  const [state,setState]=useState({
    email:"",
    errorEmail:"",
    isErrorEmail:false
  })
  const buttonDisabled=(!state.email||state.isErrorEmail  )
  const passwordReset=async ()=>{
    // console.log(state.email)
   await sendResetEmail(state.email).then(data=>{
        console.log(data.error.data.errors)
    }
  )
  }

  const validateEmail = (email) => {
    // Simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email.trim()){
      setState(state=>{return{
        ...state,
        isErrorEmail:false,
        errorEmail:"*email required"
      }});
    }
    else if(!emailRegex.test(email)){
      setState(state=>{return{
        ...state,
        isErrorEmail:true,
        errorEmail:"*invalid email"
      }});
    }
    else{
      setState(state=>{return{
        ...state,
        isErrorEmail:false,
        errorEmail:""
      }});
    }
  };
  
 
  return (
    <ScrollView style={{ flex: 1,marginTop:20 }}>
    <KeyboardAvoidingView>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'#03bafc'}
      />

        <Modal  transparent={true}
        visible={isLoading}
        >
          <View backgroundColor={'rgba(50,50,50,.3)'} style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <ActivityIndicator style={{}} size={'medium'} color={'black'} animating={true}/>
          </View>
        </Modal>

      <LinearGradient
        colors={['#42a1f5', '#03bafc', '#42c5f5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderBottomLeftRadius: responsiveHeight(3),
          borderBottomRightRadius: responsiveHeight(3),
          height: responsiveHeight(30),
          width: responsiveWidth(100),
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Text style={{ color: 'white', fontSize: responsiveHeight(4), fontWeight: 'bold' }}>
          AddaZakat
        </Text>
      </LinearGradient>
      <View
        style={{
          elevation: 4,
          backgroundColor: 'white',
          borderRadius: responsiveWidth(5),
          margin: responsiveWidth(3),
          marginTop: responsiveHeight(-2),
          paddingVertical: responsiveHeight(2),
          // alignItems:'center',
          paddingHorizontal: responsiveWidth(5),
        }}>
        <Text
          style={{
            fontSize: responsiveHeight(2.5),
            fontWeight: 'bold',
            color: '#03bafc',
            textAlign: 'center'
          }}>
          RESET PASSWORD
        </Text>
        <View style={{ marginVertical: responsiveHeight(2) }}>
          
          <View style={{ marginTop: responsiveHeight(1) }}>
            <TextInput  onBlur={() => validateEmail(state.email)} value={state.email} onChangeText={(text) => setState({...state,email:text})} placeholder='Email' style={{ fontSize: responsiveHeight(2.5), height: responsiveHeight(5), padding: responsiveHeight(.5), borderBottomColor: state.isErrorEmail ? 'red' : '#03bafc', borderBottomWidth: 2 }} />
            <View style={{ marginVertical: responsiveHeight(1), alignItems: 'flex-start' }}>
              {state.isErrorEmail ? (<Text style={{ color: 'red' }}>{state.errorEmail}</Text>) : (<Text></Text>)}
            </View>
          </View>

          <View style={{ marginTop: responsiveHeight(4) }}>
            <TouchableOpacity disabled={buttonDisabled} onPress={passwordReset}>
              <LinearGradient
                onPress={() => {passwordReset }}
                colors={['#42a1f5', '#03bafc', '#42c5f5']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: 100,
                  width: responsiveWidth(60),
                  alignSelf: 'center',
                  alignItems: 'center',
                  paddingVertical: responsiveHeight(1),
                  opacity:buttonDisabled?.5:1.0
                }}>
                <Text style={{ color: 'white', fontSize: 19 }}>Reset</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: responsiveHeight(3) }}>
            <Text onPress={()=>navigation.goBack()} style={{ color: '#03bafc', fontSize: responsiveHeight(2.5),textDecorationLine:"underline", textAlign: 'center' }}>
              go back
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  </ScrollView>

  )
}

export default ForgetPassword