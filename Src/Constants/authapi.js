import axios from 'axios';
// Function to make login API request
export const loginUser = async (email, password) => {
    try {
      // Define the endpoint URL
      const apiUrl = 'http://127.0.0.1:8000/user/login/';
  
      // Define the request body with email and password
      const requestBody = {
        email: email,
        password: password
      };
  
      // Make the POST request using Axios
      const response = await axios.post(apiUrl, requestBody);
  
      // Check the response status and handle accordingly
      if (response.status === 200) {
        // Login successful, handle the response data
        console.log('Login successful:', response.data);
        return response.data; // Return data if needed
      } else {
        // Handle other response statuses (e.g., 4xx, 5xx)
        console.log('Login failed:', response.statusText);
        throw new Error('Login failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error during login:', error.message);
      throw error; // Rethrow the error for the caller to handle
    }
  };
  