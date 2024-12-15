import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Dodaj to, aby ciasteczka były automatycznie wysyłane
});

export default instance;

