// src/api/fetch-data.js
const cache = {
  data: null,
  expiryTime: 0,
};
const CACHE_DURATION_MS = 5 * 60 * 1000;

export default async function handler(req, res) {
  // console.log("fetch-data.js function invoked!"); 

  try {
    if (cache.data && cache.expiryTime > Date.now()) {
      // console.log("Serving data from cache");
      return res.status(200).json(cache.data);
    }

    //   console.log("Fetching data from JSONbin.io...");
    const response = await fetch('https://api.jsonbin.io/v3/b/664f9679ad19ca34f86e10bc', {
      headers: {
        'X-ACCESS-KEY': process.env.JSONBIN_ACCESS_KEY,
        'X-MASTER-KEY': process.env.JSONBIN_MASTER_KEY,
      },
    });

    //   console.log("Response from JSONbin.io:", response);
    //   console.log("Response status:", response.status);
    //   console.log("Response headers:", response.headers);

    if (!response.ok) {
      const errorText = await response.text(); // Get error text from response
      console.error("Error response from JSONbin.io:", errorText);
      throw new Error(`Error fetching data: ${response.status} - ${errorText}`);
    }

    //   console.log("Parsing JSON response...");
    const data = await response.json();
    //   console.log("Parsed JSON data:", data); 

    cache.data = data;
    cache.expiryTime = Date.now() + CACHE_DURATION_MS;

    //   console.log("Setting Cache-Control header...");
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    //   console.log("Sending JSON response...");
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in fetch-data.js:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}