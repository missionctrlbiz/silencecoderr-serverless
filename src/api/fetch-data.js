// src/api/fetch-data.js

// Simple in-memory caching for now (consider a more robust solution for production)
const cache = {
    data: null,
    expiryTime: 0,
};
const CACHE_DURATION_MS = 5 * 60 * 1000; // Cache for 5 minutes

export default async function handler(req, res) {
    try {
        if (cache.data && cache.expiryTime > Date.now()) {
            return res.status(200).json(cache.data);
        }

        const response = await fetch('https://api.jsonbin.io/v3/b/664f9679ad19ca34f86e10bc', {
            headers: {
                'X-ACCESS-KEY': process.env.JSONBIN_ACCESS_KEY,
                'X-MASTER-KEY': process.env.JSONBIN_MASTER_KEY,
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
        }

        const data = await response.json();
        cache.data = data;
        cache.expiryTime = Date.now() + CACHE_DURATION_MS;
        // *** Vercel Edge Caching ***
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
        res.status(200).json(data);
    } catch (error) {
        console.error('Error in fetch-data.js:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}