const express = require('express');
  const fetch = require('node-fetch');
  const app = express();

  app.use(express.json());

  app.use('/api', async (req, res) => {
    try {
      const response = await fetch(`https://script.google.com${req.url}`, {
        method: req.method,
        headers: { 'Content-Type': 'application/json' },
        body: req.method === 'POST' ? JSON.stringify(req.body) : undefined,
      });
      const data = await response.json();
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json(data);
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  });

  app.listen(3000, () => console.log('Server running on port 3000'));