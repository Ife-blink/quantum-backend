import axios from 'axios';

const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    // Handle any errors that occurred during the request
    console.error('Error:', error.message);
    throw error;
  }
};

// Example usage
const apiUrl = 'https://3000-ifeblink-quantumbackend-d84ansdmtpo.ws-eu100.gitpod.io/api/name';
const payload = { name: 'John Doe', email: 'john.doe@example.com' };

postData(apiUrl, payload)
  .then((responseData) => {
    console.log('Response:', responseData);
    // Handle the response data
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error:', error.message);
  });
