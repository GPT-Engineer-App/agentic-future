import express from 'express';
import apiRouter from './api.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});