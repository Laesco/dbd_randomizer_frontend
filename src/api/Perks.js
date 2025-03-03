import { fetchWrapper } from '../util/helpers.js'

// Base URL of the API (optional, for convenience)
//const API_BASE_URL = 'https://localhost:44317/api/';

/**
 * Fetch all addons (GET)
 */
export const getPerks = () => fetchWrapper(import.meta.env.VITE_API_BASE_URL + "Perks");

//Fetch specific addon
export const getPerksById = (id) => fetchWrapper(`${import.meta.env.VITE_API_BASE_URL}Perks/${id}`);