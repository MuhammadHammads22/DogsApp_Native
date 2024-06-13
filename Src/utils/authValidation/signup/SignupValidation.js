import { useDispatch } from "react-redux";
import { setErrorConfirmPassword, setErrorDob, setErrorEmail, setErrorFullName, setErrorGender, setErrorPassword, setErrorPhoneNumber, setErrorReligion, setErrorUserName, setIsErrorConfirmPassword, setIsErrorDate, setIsErrorDob, setIsErrorEmail, setIsErrorFullName, setIsErrorGender, setIsErrorPassword, setIsErrorPhoneNumber, setIsErrorReligion, setIsErrorUserName } from "../../../Slices/SignupSlice";


export const validateEmail=(email,dispatch)=>{
    // Simple email validation regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email.trim()){
          dispatch(setIsErrorEmail(true));
          dispatch(setErrorEmail("*email required"));
        }
        else if(!emailRegex.test(email)){
          dispatch(setIsErrorEmail(true));
          dispatch(setErrorEmail("*invalid email"));
        }
        else{
          dispatch(setIsErrorEmail(false));
          dispatch(setErrorEmail(""));
        }
      }
    
    // Username validation   
export const validateUserName=(userName,dispatch)=>{
        if (!userName.trim()) {
          dispatch(setErrorUserName('Username is required'));
          dispatch(setIsErrorUserName(true));
        }
        else{
          dispatch(setErrorUserName(''));
          dispatch(setIsErrorUserName(false));
      }
    }
    
    // Full name validation
export const validateFullName=(fullName,dispatch)=>{
        if (!fullName.trim()) {
          dispatch(setErrorFullName('Full name is required'))
          dispatch(setIsErrorFullName(true))
        }
        else{
          dispatch(setErrorFullName(''));
          dispatch(setIsErrorFullName(false));
    }
    }
    
    
    // Date of Birth validation 
export const validateDob=(dob,dispatch)=>{
          const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
          if (!dob) {
          dispatch(setErrorDob('Date of Birth is required')) ;
          dispatch(setIsErrorDob(true));
        }
        else if(!dobRegex.test(dob)){
          dispatch(setIsErrorDob(true));
          dispatch(setErrorDob("*invalid date format"));
        }
        else{
          dispatch(setErrorDob(''));
          dispatch(setIsErrorDob(false));
      }
    }
    // Religion validation
export const validateReligion=(religion,dispatch)=>{
        if (!religion.trim()) {
          dispatch(setErrorReligion('Religion is required'));
          dispatch(setIsErrorReligion(true));
        }
        else{
          dispatch(setErrorReligion(''));
          dispatch(setIsErrorReligion(false));
        }
      }
      // Phone Number validation
      export function validatePhoneNumber(phoneNumber,dispatch) {
        // Define the regular expression pattern
        const phonePattern = /^(03|92)\d{9}$/;
      
        // Test the phone number against the pattern
        if (!phoneNumber) {
          dispatch(setErrorPhoneNumber('Phone number is required')) ;
          dispatch(setIsErrorPhoneNumber(true));
        }
        else if(!phonePattern.test(phoneNumber)){
          dispatch(setErrorPhoneNumber('*invalid phone number format')) ;
          dispatch(setIsErrorPhoneNumber(true));
        }
        else{
          dispatch(setErrorPhoneNumber('')) ;
          dispatch(setIsErrorPhoneNumber(false));
      }
      }
    // Gender validation
export const validateGender=(gender,dispatch)=>{
        if (!gender.trim()) {
          dispatch(setErrorGender('Gender is required'));
          dispatch(setIsErrorGender(true));
        }
        else if (gender) {
          switch(gender.trim().toLowerCase()){
            case 'male':
              dispatch(setErrorGender(''));
              dispatch(setIsErrorGender(false));
              break;
          
            case 'female':
              dispatch(setErrorGender(''));
              dispatch(setIsErrorGender(false));
              break;
            case 'other':
              dispatch(setErrorGender(''));
              dispatch(setIsErrorGender(false));
              break;
            default:
              dispatch(setErrorGender('invalid gender'));
              dispatch(setIsErrorGender(true));
          }
        }
        else{
          dispatch(setErrorGender(''));
          dispatch(setIsErrorGender(false));
        }
      }
    
    // Password validation
export const validatePassword=(password,dispatch)=>{
          if(!password){
            dispatch(setIsErrorPassword(true));
            dispatch(setErrorPassword("*password required"));
          }
          else if(password.length<8){
            dispatch(setIsErrorPassword(true));
            dispatch(setErrorPassword("*short password"));
          }
          else if(!/[A-Z]/.test(password) && !/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            dispatch(setIsErrorPassword(true));
            dispatch(setErrorPassword("*uppercase and special character missing"));
          } 
          else if(!/[A-Z]/.test(password)){
            dispatch(setIsErrorPassword(true));
            dispatch(setErrorPassword("*uppercase letter missing"));
          } 
          else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            dispatch(setIsErrorPassword(true));
            dispatch(setErrorPassword("*special character missing"));
          }
        
          else{
            dispatch(setIsErrorPassword(false));
            dispatch(setErrorPassword(""));
          }
          
      }
    
    // Confirm Password validation
export const validateConfirmPassword=(confirmPassword,password,dispatch)=>{
        if (!confirmPassword.trim()) {
          dispatch(setErrorConfirmPassword('Confirm password is required'));
          dispatch(setIsErrorConfirmPassword(true));
        } else if (password !== confirmPassword) {
          dispatch(setErrorConfirmPassword('Passwords do not match'));
          dispatch(setIsErrorConfirmPassword(true));
        }else{
          dispatch(setErrorConfirmPassword(''));
          dispatch(setIsErrorConfirmPassword(false));
        }
      }