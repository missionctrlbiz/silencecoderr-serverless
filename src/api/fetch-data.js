// api/fetch-data.js
// api/fetch-data.js

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
                'X-ACCESS-KEY': '$2a$10$4EN2GPJn4AOiq2uNpGS35.i/DlvTFph1fgQReUBLcH2mpmm0J5ft.',
                'X-MASTER-KEY': '$2a$10$hGEua.fk2zjUH4ho80nmcuTDtW5dGXptKgrifYfbS9SwjJTfxoJ6K', 
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
