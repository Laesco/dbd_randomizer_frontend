export const fetchWrapper = async (url, options = {}) => {
    try {
        const response = await fetch(url, {
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            ...options,
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'An error occurred');
        }

        return await response.json();
    } catch (err) {
        console.error(`Error with fetch: ${err.message}`);
        throw err; // Re-throw to handle errors in calling code
    }
};