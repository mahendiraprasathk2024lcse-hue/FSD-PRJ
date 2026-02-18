import axios from 'axios';

const API_URL = '/api';

// Set token in headers
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Auth APIs
export const registerUser = (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/auth/login`, userData);
export const getProfile = () => axios.get(`${API_URL}/auth/profile`);
export const updateProfile = (userData) => axios.put(`${API_URL}/auth/profile`, userData);

// Event APIs
export const getAllEvents = () => axios.get(`${API_URL}/events`);
export const getEventById = (id) => axios.get(`${API_URL}/events/${id}`);
export const createEvent = (eventData) => axios.post(`${API_URL}/events`, eventData);
export const updateEvent = (id, eventData) => axios.put(`${API_URL}/events/${id}`, eventData);
export const deleteEvent = (id) => axios.delete(`${API_URL}/events/${id}`);

// Registration APIs
export const registerForEvent = (eventId) => axios.post(`${API_URL}/registrations`, { eventId });
export const getMyRegistrations = () => axios.get(`${API_URL}/registrations/my-registrations`);
export const getAllRegistrations = () => axios.get(`${API_URL}/registrations/all`);
export const getEventRegistrations = (eventId) => axios.get(`${API_URL}/registrations/event/${eventId}`);
export const cancelRegistration = (eventId) => axios.delete(`${API_URL}/registrations/${eventId}`);

// Admin APIs
export const getAllStudents = () => axios.get(`${API_URL}/admin/students`);
export const getDashboardStats = () => axios.get(`${API_URL}/admin/stats`);

export { setAuthToken };
