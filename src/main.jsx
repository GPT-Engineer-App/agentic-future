import express from 'express';
import browseRouter from './api/browse.js';

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', browseRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});