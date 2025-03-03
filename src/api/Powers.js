import { fetchWrapper } from '../util/helpers.js'

// Base URL of the API (optional, for convenience)
//const API_BASE_URL = 'https://localhost:44317/api/';

/**
 * Fetch all addons (GET)
 */
export const getPowers = () => fetchWrapper(import.meta.env.VITE_API_BASE_URL + "Powers");

//Fetch specific addon
export const getPowersById = (id) => fetchWrapper(`${import.meta.env.VITE_API_BASE_URL}Powers/${id}`);