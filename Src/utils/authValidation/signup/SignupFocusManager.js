import { useRef } from 'react';

const useFieldFocus = () => {
  const refs = {
    email: useRef(null),
    userName:useRef(null),
    fullName: useRef(null),
    phoneNumber:useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
    religion: useRef(null),
    gender: useRef(null),
    dob: useRef(null),
  };

  const focusNextField = (fieldName) => {
    if (refs[fieldName] && refs[fieldName].current) {
      refs[fieldName].current.focus();
    }
  };

  return {
    refs,
    focusNextField,
  };
};

export default useFieldFocus;
