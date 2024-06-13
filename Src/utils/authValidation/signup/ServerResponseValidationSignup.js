
export const SignupValidation=(response)=>{
   let error={error:[]};
   if (response && response.errors) {
    const { errors } = response;

    if (errors.email) {

      error.error.push("email")

    }
    if (errors.username) {

      error.error.push("userName")

    }
    if (errors.date_of_birth) {

        error.error.push("dob")
  
    }
    if (errors.phone_number) {

      error.error.push("phoneNumber")

  }
  } else {

    console.log('No errors in response or invalid response format');

  }
  return  error
};
