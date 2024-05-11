import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useSignUpMutation } from '../Src/Api/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword,setConfirmPassword, setDob, setEmail, setErrorConfirmPassword, setErrorDob, setErrorEmail, setErrorFullName, setErrorGender, setErrorPassword, setErrorReligion, setErrorUserName, setFullName, setGender, setIsErrorConfirmPassword, setIsErrorDate, setIsErrorEmail, setIsErrorFullName, setIsErrorGender, setIsErrorPassword, setIsErrorReligion, setIsErrorUserName, setReligion, setUserName, setToInitialState } from '../Src/Slices/SignupSlice';
import { validateConfirmPassword, validateDob, validateEmail, validateFullName, validateGender, validatePassword, validateReligion, validateUserName } from '../Src/utils/authValidation/SignupValidation';
import useFieldFocus from '../Src/utils/authValidation/SignupFocusManager';
import { SignupValidation } from '../Src/utils/authValidation/ServerResponseValidationSignup';
const SignUpForm = () => {
  const signupState=useSelector((state)=>state.signup.signup);
  const email=signupState.email
  const userName=signupState.userName
  const fullName=signupState.fullName
  const dob =signupState.dob
  const religion=signupState.religion
  const gender=signupState.gender
  const password=signupState.password
  const confirmPassword=signupState.confirmPassword
  const dispatch=useDispatch()

 




  const [signup,{isSuccess,error,isLoading}]=useSignUpMutation();
  const performSignup=async()=>{
    await signup({email:email,username:userName,full_name:fullName,religion:religion,gender:gender,date_of_birth:dob,password:password,password2:confirmPassword}).then((data)=>{
      // console.log((data.error.data)?true:false);
      // console.log((data.data.success)?true:false);
      // console.log(data.error.data);
      // console.log(data)
      // console.log(isSuccess)
      // console.log(error.status)
      if (data.data && data.data.success === "Register Successfully") {
        // Action for successful registration
        dispatch(setToInitialState())
        console.log("Registration successful");
      } else{
         console.log(data.error.data)
         const errors=SignupValidation(data.error.data)
         errors.error.forEach((Item,index)=>{
             switch(Item){
             case "email":
               console.log(Item)
         dispatch(setErrorEmail("Email already exist"))
         dispatch(setIsErrorEmail(true))
               break;
             case "userName":
               console.log(Item)
         dispatch(setErrorUserName("User name already exist"))
         dispatch(setIsErrorUserName(true))
               break;
             case "dob":
               console.log(Item)
               break;
             }
         })
      }
  
      //  if(error.status===400){

   

      //  }
      //  else{
      //   console.log(data.data)
      //  }

     
    }
  )  
}


  const { refs, focusNextField } = useFieldFocus();

  const handleEmailSubmit = () => {
    focusNextField('userName');
  };

  const handleUserNameSubmit = () => {
    focusNextField('fullName');
  };

  const handleFullNameSubmit = () => {
    focusNextField('dob');
  };

  const handleDobSubmit = () => {
    focusNextField('religion');
  };

  const handleReligionSubmit = () => {
    focusNextField('gender');
  };
  const handleGenderSubmit = () => {
    focusNextField('password');
  };
  const handlePasswordSubmit = () => {
    focusNextField('confirmPassword');
  };




  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text)=>dispatch(setEmail(text))}
        onBlur={()=>validateEmail(email,dispatch)}
        ref={refs.email}
        onSubmitEditing={handleEmailSubmit}
      />
      {signupState.isErrorEmail && <Text style={styles.errorText}>{signupState.errorEmail}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={(text)=>dispatch(setUserName(text))}
        onBlur={()=>validateUserName(userName,dispatch)}
        ref={refs.userName}
        onSubmitEditing={handleUserNameSubmit}
      />
      {signupState.isErrorUserName && <Text style={styles.errorText}>{signupState.errorUserName}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={(text)=>dispatch(setFullName(text))}
        onBlur={()=>validateFullName(fullName,dispatch)}
        ref={refs.fullName}
        onSubmitEditing={handleFullNameSubmit}
      />
      {signupState.isErrorFullName && <Text style={styles.errorText}>{signupState.errorFullName}</Text>}


      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={dob}
        onChangeText={(text)=>dispatch(setDob(text))}
        onBlur={()=>validateDob(dob,dispatch)}
        ref={refs.dob}
        onSubmitEditing={handleDobSubmit}

      />
      {signupState.isErrorDate && <Text style={styles.errorText}>{signupState.errorDob}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Religion"
        value={religion}
        onChangeText={(text)=>dispatch(setReligion(text))}
        onBlur={()=>validateReligion(religion,dispatch)}
        ref={refs.religion}
        onSubmitEditing={handleReligionSubmit}
      />
      {signupState.isErrorReligion && <Text style={styles.errorText}>{signupState.errorReligion}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={(text)=>dispatch(setGender(text))}
        onBlur={()=>validateGender(gender,dispatch)}
        ref={refs.gender}
        onSubmitEditing={handleGenderSubmit}
      />
      {signupState.isErrorGender && <Text style={styles.errorText}>{signupState.errorGender}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={signupState.passwordHidden}
        value={password}
        onChangeText={(text)=>{
          dispatch(setPassword(text))
          if(password.length>2) validatePassword(password,dispatch)
            if(confirmPassword.length()>2) validateConfirmPassword(confirmPassword,password,dispatch)
        }}
        onBlur={()=>validatePassword(password)}
        ref={refs.password}
        onSubmitEditing={handlePasswordSubmit}


      />
      {signupState.isErrorPassword && <Text style={styles.errorText}>{signupState.errorPassword}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={signupState.confirmPasswordHidden}
        value={confirmPassword}
        onChangeText={(text)=>{
          dispatch(setConfirmPassword(text))
          validateConfirmPassword(confirmPassword,password,dispatch)
        }}
        onBlur={()=>validateConfirmPassword(confirmPassword,password,dispatch)}
        ref={refs.confirmPassword}
      />
      {signupState.isErrorConfirmPassword && <Text style={styles.errorText}>{signupState.errorConfirmPassword}</Text>}

      <Button title="SignUp" onPress={performSignup} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
});

export default SignUpForm;


// const validateEmail=()=>{
// // Simple email validation regex pattern
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(!email.trim()){
//       dispatch(setIsErrorEmail(true));
//       dispatch(setErrorEmail("*email required"));
//     }
//     else if(!emailRegex.test(email)){
//       dispatch(setIsErrorEmail(true));
//       dispatch(setErrorEmail("*invalid email"));
//     }
//     else{
//       dispatch(setIsErrorEmail(false));
//       dispatch(setErrorEmail(""));
//     }
//   }

// // Username validation   
// const validateUserName=()=>{
//     if (!userName.trim()) {
//       dispatch(setErrorUserName('Username is required'));
//       dispatch(setIsErrorUserName(true));
//     }
//     else{
//       dispatch(setErrorUserName(''));
//       dispatch(setIsErrorUserName(false));
//   }
// }

// // Full name validation
// const validateFullName=()=>{
//     if (!fullName.trim()) {
//       dispatch(setErrorFullName('Full name is required'))
//       dispatch(setIsErrorFullName(true))
//     }
//     else{
//       dispatch(setErrorFullName(''));
//       dispatch(setIsErrorFullName(false));
// }
// }


// // Date of Birth validation
// const validateDob=()=>{
//     if (!dob) {
//       dispatch(setErrorDob('Date of Birth is required')) ;
//       dispatch(setIsErrorDate(true));
//     }
//     else{
//       dispatch(setErrorDob(''));
//       dispatch(setIsErrorDate(false));
//   }
// }
// // Religion validation
//     const validateReligion=()=>{
//     if (!religion.trim()) {
//       dispatch(setErrorReligion('Religion is required'));
//       dispatch(setIsErrorReligion(true));
//     }
//     else{
//       dispatch(setErrorReligion(''));
//       dispatch(setIsErrorReligion(false));
//     }
//   }
// // Gender validation
//     const validateGender=()=>{
//     if (!gender.trim()) {
//       dispatch(setErrorGender('Gender is required'));
//       dispatch(setIsErrorGender(true));
//     }
//     else if (gender) {
//       switch(gender.trim().toLowerCase()){
//         case 'male':
//           dispatch(setErrorGender(''));
//           dispatch(setIsErrorGender(false));
//           break;
      
//         case 'female':
//           dispatch(setErrorGender(''));
//           dispatch(setIsErrorGender(false));
//           break;
//         case 'other':
//           dispatch(setErrorGender(''));
//           dispatch(setIsErrorGender(false));
//           break;
//         default:
//           dispatch(setErrorGender('invalid gender'));
//           dispatch(setIsErrorGender(true));
//       }
//     }
//     else{
//       dispatch(setErrorGender(''));
//       dispatch(setIsErrorGender(false));
//     }
//   }

// // Password validation
//     const validatePassword=()=>{
//       if(!password){
//         dispatch(setIsErrorPassword(true));
//         dispatch(setErrorPassword("*password required"));
//       }
//       else if(password.length<8){
//         dispatch(setIsErrorPassword(true));
//         dispatch(setErrorPassword("*short password"));
//       }
//       else if(!/[A-Z]/.test(password) && !/[!@#$%^&*(),.?":{}|<>]/.test(password)){
//         dispatch(setIsErrorPassword(true));
//         dispatch(setErrorPassword("*uppercase and special character missing"));
//       } 
//       else if(!/[A-Z]/.test(password)){
//         dispatch(setIsErrorPassword(true));
//         dispatch(setErrorPassword("*uppercase letter missing"));
//       } 
//       else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
//         dispatch(setIsErrorPassword(true));
//         dispatch(setErrorPassword("*special character missing"));
//       }
    
//       else{
//         dispatch(setIsErrorPassword(false));
//         dispatch(setErrorPassword(""));
//       }
      
//   }

// // Confirm Password validation
//     const validateConfirmPassword=()=>{
//     if (!confirmPassword.trim()) {
//       dispatch(setErrorConfirmPassword('Confirm password is required'));
//       dispatch(setIsErrorConfirmPassword(true));
//     } else if (password !== confirmPassword) {
//       dispatch(setErrorConfirmPassword('Passwords do not match'));
//       dispatch(setIsErrorConfirmPassword(true));
//     }else{
//       dispatch(setErrorConfirmPassword(''));
//       dispatch(setIsErrorConfirmPassword(false));
//     }
//   }