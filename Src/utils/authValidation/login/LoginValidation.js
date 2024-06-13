import { useDispatch } from "react-redux";
import { setErrorEmail, setErrorPassword, setIsErrorEmail, setIsErrorPassword } from "../../../Slices/LoginSlice";

// const dispatch=useDispatch()


// validation func
export const validateEmail = (email,dispatch) => {
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
};

export const validatePassword = (password,dispatch) => {

  // Simple email validation regex pattern
  if(!password){
    dispatch(setIsErrorPassword(true));
    dispatch(setErrorPassword("*password required"));
  }
  else if(password.length<7){
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
};
