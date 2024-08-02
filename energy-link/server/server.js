const express = require('express');
const https = require('https');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Use the CORS middleware
app.use(cors());

// API endpoint to verify user
app.get('/api/verify-user', (req, res) => {
    const user_json_url = req.query.url;

    if (!user_json_url) {
        return res.status(400).json({ error: 'No URL provided' });
    }

    https.get(user_json_url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            try {
                const jsonData = JSON.parse(data);

                // Extract necessary fields
                const userData = {
                    user_country_code: jsonData.user_country_code,
                    user_phone_number: jsonData.user_phone_number,
                    user_first_name: jsonData.user_first_name,
                    user_last_name: jsonData.user_last_name
                };

                res.json(userData);
            } catch (e) {
                res.status(500).json({ error: 'Failed to parse JSON data' });
            }
        });

    }).on("error", (err) => {
        res.status(500).json({ error: err.message });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
