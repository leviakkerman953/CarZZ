import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/', // Set the base URL for requests
    timeout: 5000, // Set the request timeout (in milliseconds)
    headers: {
      'Content-Type': 'application/json', // Set default headers for requests
    }
  });


export default apiClient;
  