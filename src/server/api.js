import express from 'express';
import { executeCommand } from './executeCommand.js';
import { fetchModel } from '../utils/huggingface';

const router = express.Router();

router.post('/execute', async (req, res) => {
  const { command } = req.body;
  try {
    const output = await executeCommand(command);
    res.json({ output });
  } catch (error) {
    res.status(500).json({ error: 'Failed to execute command' });
  }
});

router.get('/model/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const model = await fetchModel(id);
    res.json({ model });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch model' });
  }
});

export default router;