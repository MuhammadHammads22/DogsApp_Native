import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLoginMutation } from '../Src/Api/Auth'
import { setTokenAndName } from '../Src/Slices/AuthPersistSlice'
import { useDispatch, useSelector } from 'react-redux'
import { persistor } from '../Src/store/Store'
import { Image, Svg } from 'react-native-svg'
import { setEmail, setErrorEmail, setErrorPassword, setIsErrorEmail, setIsErrorPassword, setPassword } from '../Src/Slices/LoginSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { state } from '../Src/Slices/LoginSlice'
import { validateEmail, validatePassword } from '../Src/utils/authValidation/LoginValidation'

const Login = ({navigation}) => {

const loginState=useSelector((state)=>state.login.login);
const email=loginState.email
const password=loginState.password
const dispatch=useDispatch()




const emailRef = useRef(null);
const passwordRef = useRef(null);


const focusNextField = (nextFieldRef) => {
  if (nextFieldRef.current) {
    nextFieldRef.current.focus();
  }
};

const handleEmailSubmit = () => {
  focusNextField(passwordRef);
};


// api
  const [login,{data,isError,error}]=useLoginMutation();
  const loginfunc=async()=>{
    const res= await login({email:loginState.email,password:loginState.password}).unwrap();
    if (res.error) {
      console.warn("400")
      console.warn(res.error);
    }
    if (res.data) {
      console.warn("success")
      console.warn(res.data.token);
    }
  }
  return (
    <SafeAreaView>
    <View style={{alignContent:'center',marginHorizontal:10}}>
      <TextInput ref={emailRef} onSubmitEditing={handleEmailSubmit} onBlur={()=>validateEmail(email,dispatch)} value={email} onChangeText={(text)=>dispatch(setEmail(text))} placeholder='email' style={{borderColor:loginState.isErrorEmail?'red':'black',borderWidth:2}} />
      <View style={{height:30,padding:5}}>
        { loginState.isErrorEmail? (<Text style={{color:'red'}}>{loginState.errorEmail}</Text>):(<Text></Text>)} 
      </View>
      <TextInput ref={passwordRef} onBlur={()=>validatePassword(password,dispatch)} value={password} placeholder='password'  onChangeText={(text)=>dispatch(setPassword(text))} style={{borderColor:'black',borderWidth:2}} />
      <View style={{height:30,padding:5}}>
        { loginState.isErrorPassword? (<Text style={{color:'red'}}>{loginState.errorPassword}</Text>):(<Text></Text>)} 
      </View>
     <Button disabled={ loginState.isErrorEmail || loginState.isErrorPassword } title="login" onPress={ ()=>  loginfunc() }/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set your desired background color
  },
});

export default Login

// // validation func
// const validateEmail = () => {
//   // Simple email validation regex pattern
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if(!email.trim()){
//     dispatch(setIsErrorEmail(true));
//     dispatch(setErrorEmail("*email required"));
//   }
//   else if(!emailRegex.test(email)){
//     dispatch(setIsErrorEmail(true));
//     dispatch(setErrorEmail("*invalid email"));
//   }
//   else{
//     dispatch(setIsErrorEmail(false));
//     dispatch(setErrorEmail(""));
//   }
// };

// const validatePassword = () => {
//   // Simple email validation regex pattern
//   if(!password){
//     dispatch(setIsErrorPassword(true));
//     dispatch(setErrorPassword("*password required"));
//   }
//   else if(password.length<8){
//     dispatch(setIsErrorPassword(true));
//     dispatch(setErrorPassword("*short password"));
//   }
//   else if(!/[A-Z]/.test(password) && !/[!@#$%^&*(),.?":{}|<>]/.test(password)){
//     dispatch(setIsErrorPassword(true));
//     dispatch(setErrorPassword("*uppercase and special character missing"));
//   } 
//   else if(!/[A-Z]/.test(password)){
//     dispatch(setIsErrorPassword(true));
//     dispatch(setErrorPassword("*uppercase letter missing"));
//   } 
//   else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
//     dispatch(setIsErrorPassword(true));
//     dispatch(setErrorPassword("*special character"));
//   }

//   else{
//     dispatch(setIsErrorPassword(false));
//     dispatch(setErrorPassword(""));
//   }
// };



// validation func