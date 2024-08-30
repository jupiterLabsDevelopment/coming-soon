import axios from 'axios';

/**
 * The API client for making HTTP requests.
 *
 * @remarks
 * This client is configured with the base URL, headers, and timeout.
 *
 * @returns - An instance of the API client.
 */
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default apiClient;