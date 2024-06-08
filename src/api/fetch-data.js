// api/fetch-data.js
require('dotenv').config();

const cache = {};
const CACHE_DURATION_MS = 5 * 60 * 1000; // Cache for 5 minutes

export default async function handler(req, res) {
    try {
        // Check if cached data exists and not expired
        if (cache.data && cache.expiryTime > Date.now()) {
            return res.status(200).json(cache.data);
        }

        const response = await fetch('https://api.jsonbin.io/v3/b/664f9679ad19ca34f86e10bc', {
            headers: {
                'X-ACCESS-KEY': process.env.ACCESS_KEY, // Using environment variable
                'X-MASTER-KEY': process.env.MASTER_KEY, // Using environment variable
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
        }

        const data = await response.json();
        
        // Cache the response
        cache.data = data;
        cache.expiryTime = Date.now() + CACHE_DURATION_MS;

        res.status(200).json(data);
    } catch (error) {
        console.error('Error in fetch-data.js:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
