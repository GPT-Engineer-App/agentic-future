import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/browse', async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error('Error fetching the URL:', error);
    res.status(500).send('Error fetching the URL');
  }
});

export default router;