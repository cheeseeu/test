const express = require('express')
const app = express();

app.listen("3000", () => {
  console.log(`Server is running on port 3000`);
});

const cors = require('cors');
app.use(cors());
app.use(express.json());


app.post('/api/message/:id/:message', async (req, res) => {
    const originalApiUrl = `https://beta-3ndi0q2whds-981qnd-qw-edmqo-odqa-1.2js93ms943cnr9xnw9dh8q9.repl.co/api/message/${req.params.id}/${req.params.message}`;

    try {
        const response = await fetch(originalApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        const responseData = await response.json();

        // Forward the response from the original API
        res.json(responseData);
    } catch (error) {
        console.error('Error forwarding API request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
