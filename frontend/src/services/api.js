import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Adjust the base URL as needed

export const fetchBookings = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/bookings`);
        return response.data;
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
};

export const createBooking = async (bookingData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
        return response.data;
    } catch (error) {
        console.error('Error creating booking:', error);
        throw error;
    }
};

export const fetchBookingDetails = async (bookingId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/bookings/${bookingId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching booking details:', error);
        throw error;
    }
};

export const fetchFlights = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/flights`);
        return response.data;
    } catch (error) {
        console.error('Error fetching flights:', error);
        throw error;
    }
};

export const fetchBuses = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/buses`);
        return response.data;
    } catch (error) {
        console.error('Error fetching buses:', error);
        throw error;
    }
};

export const fetchTrains = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trains`);
        return response.data;
    } catch (error) {
        console.error('Error fetching trains:', error);
        throw error;
    }
};

export const fetchTours = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tours`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tours:', error);
        throw error;
    }
};